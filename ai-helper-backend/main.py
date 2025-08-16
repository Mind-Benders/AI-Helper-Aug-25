from fastapi import FastAPI, HTTPException, Response, Request, Depends
from schemas import UserRegister, UserLogin, UserResponse
from models import create_user, get_user_by_username, hash_password, verify_password
from database import check_connection
from auth import create_access_token, get_current_user_from_cookie

app = FastAPI()

@app.on_event("startup")
async def startup_event():
    await check_connection()


@app.post("/register", response_model=UserResponse)
async def register(user: UserRegister):
    existing_user = await get_user_by_username(user.username)
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")

    user_dict = user.dict()
    user_dict["password"] = hash_password(user.password)  

    await create_user(user_dict)

    return UserResponse(
        full_name=user.full_name,
        username=user.username,
        email=user.email
    )


@app.post("/login")
async def login(user: UserLogin, response: Response):
    db_user = await get_user_by_username(user.username)
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid username or password")

    if not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=400, detail="Invalid username or password")

    # ✅ Create JWT token
    token = create_access_token({"sub": db_user["username"]})


    # testing here delete this later
    print("Generated JWT Token:", token)
    
    # ✅ Store JWT in cookies
    response.set_cookie(key="access_token", value=token, httponly=True)

    return {"message": "Login successful"}


# ✅ Profile endpoint using cookie-based JWT
@app.get("/profile", response_model=UserResponse)
async def get_profile(request: Request):
    username = get_current_user_from_cookie(request)
    user = await get_user_by_username(username)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return UserResponse(
        full_name=user["full_name"],
        username=user["username"],
        email=user["email"]
    )
