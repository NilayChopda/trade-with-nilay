from fastapi import FastAPI
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/detect-patterns")
def analyze(symbol: str):
    return {"symbol": symbol, "pattern": "Bullish Divergence", "confidence": 0.89}
