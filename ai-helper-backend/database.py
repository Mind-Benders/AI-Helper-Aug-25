from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv() ## agr hame badh mai .env file use karni hai toh

MONGO_URI= my_secret = os.environ['MONGO_URI']

client = AsyncIOMotorClient(MONGO_URI)
db = client["MindBenders"]   
users_collection = db["auth"] 

async def check_connection():
  try:
      await db.command("ping")
      print("✅ Connected to MongoDB successfully!")
  except Exception as e:
      print("❌ Could not connect to MongoDB:", e)
