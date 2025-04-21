from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

origins = ["http://127.0.0.1:3000", 
           "http://localhost:3000"]


app = FastAPI()

app.add_middleware(CORSMiddleware, 
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"])

@app.get("/")
async def root():
    return {"message": "test..."}

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return({"item_id": item_id, "message": "respose from backend"})
