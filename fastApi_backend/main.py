from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import models, db_config
from db_config import Base, engine, Session


origins = ["http://127.0.0.1:3000", 
           "http://localhost:3000"]


# Creating tables
Base.metadata.create_all(bind=engine)


app = FastAPI()

app.add_middleware(CORSMiddleware, 
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"])

@app.get("/")
async def root():
    return {"message": "test..."}

@app.get("/items/")
def read_items(db: Session = Depends(db_config.get_db)):
    items = db.query(models.Item).all()
    print("items: {items}")
    return items

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return({"item_id": item_id, "message": "respose from backend"})
