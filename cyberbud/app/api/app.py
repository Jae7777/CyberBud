from fastapi import FastAPI, HTTPException, Request, Response, UploadFile, Form, File, Depends
from starlette.middleware.sessions import SessionMiddleware
from fastapi_cache import FastAPICache
from fastapi_cache.backends.inmemory import InMemoryBackend
from fastapi_cache.decorator import cache
from fastapi_cache.coder import PickleCoder
from fastapi import Depends
import docker
#Ok idk if we need all of this stuff
from api_models import *
from io import StringIO
from sqlalchemy.orm import Session
import json
import os
from constants import Constants

app = FastAPI()
docker_client = docker.from_env()


@app.get("/")
async def read_root():
    return Response(content="Test")

@app.post("/test.json")
async def chat_with_gpt(input_text: str):
    # Replace 'YOUR_OPENAI_API_KEY' with your actual API key
    openai_api_key = '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'
    openai_endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions'

# Define your training data
    training_data = [
        {"input": "What is cybersecurity?", "output": "Cybersecurity is..."},
    # Add more input-output pairs
    ]
    headers = {
        "Authorization": f"Bearer {openai_api_key}",
    }

    data = {
        "prompt": input_text,
        "max_tokens": 50,  
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(openai_endpoint, headers=headers, json=data)

        if response.status_code == 200:
            response_data = response.json()
            return response_data['choices'][0]['text']
        else:
            return "Error: Unable to generate a response"


@app.post("/compile-and-run")
async def compile_and_run_c_code(code_file):
    with open("generated_code.c", "w") as f:
        f.write(code_file)

    input_stuff = "test"
    input_stuff = input_stuff.encode()
    # Compile the C code
    compilation_result = subprocess.run(["gcc", "generated_code.c", "-o", "output"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    if compilation_result.returncode != 0:
        return {"error": "Compilation failed", "stderr": compilation_result.stderr.decode()}

    try:
        execution_result = subprocess.run(["./output"], stdin=input_stuff, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
        return {"output": execution_result.stdout}
    except subprocess.CalledProcessError as e:
        return {"error": "Execution failed", "stderr": e.stderr}


@app.post("/gernerate-code")
async def generate_code(input_text: str):
    #get user input from form, 
    #select proper language, and exploit type, then get snippet from json datbase
    #add a flag function for buffer overflow
    #ask gpt api to gener
