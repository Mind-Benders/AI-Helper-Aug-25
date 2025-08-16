from pydantic import BaseModel, EmailStr

class UserRegister(BaseModel):
    full_name: str
    username: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class UserResponse(BaseModel):
    full_name: str
    username: str
    email: EmailStr
