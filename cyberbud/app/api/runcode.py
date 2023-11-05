"""<<<<<<< Updated upstream
=======
from fastapi import FastAPI, HTTPException, Request, Response, UploadFile, Form, File, Depends
from starlette.middleware.sessions import SessionMiddleware
from fastapi_cache import FastAPICache
from fastapi_cache.backends.inmemory import InMemoryBackend
from fastapi_cache.decorator import cache
from fastapi_cache.coder import PickleCoder
from fastapi import Depends
from google.cloud import compute_v1
import requests
#Ok idk if we need all of this stuff
from api_models import *
from io import StringIO
from sqlalchemy.orm import Session
import json
import os
from constants import Constants
import httpx

app = FastAPI()

@app.get("/")
def read_root():
    return ("Test")
def createContainer():
    return 0

def getOutput():
    return 0

def runCode():
    return 0

@app.post("/test.json")
async def chat_with_gpt(input_text: str):
    # Replace 'YOUR_OPENAI_API_KEY' with your actual API key
    openai_api_key = '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'
    openai_endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions'

    headers = {
        "Authorization": f"Bearer {openai_api_key}",
    }

    data = {
        "prompt": input_text,
        "max_tokens": 50,  # Adjust the number of tokens based on your needs
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(openai_endpoint, headers=headers, json=data)

        if response.status_code == 200:
            response_data = response.json()
            return response_data['choices'][0]['text']
        else:
            return "Error: Unable to generate a response"


>>>>>>> Stashed changes
"""