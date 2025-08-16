from passlib.context import CryptContext
from database import users_collection

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(password: str, hashed: str) -> bool:
    return pwd_context.verify(password, hashed)

async def create_user(user_data: dict):
    await users_collection.insert_one(user_data)

async def get_user_by_username(username: str):
    return await users_collection.find_one({"username": username})
