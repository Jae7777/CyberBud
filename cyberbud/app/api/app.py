"""from fastapi import FastAPI, HTTPException, Request, Response, UploadFile, Form, File, Depends
from starlette.middleware.sessions import SessionMiddleware
from fastapi_cache import FastAPICache
from fastapi_cache.backends.inmemory import InMemoryBackend
from fastapi_cache.decorator import cache
from fastapi_cache.coder import PickleCoder
from fastapi import Depends
import config.py
import subprocess
#Ok idk if we need all of this stuff
from api_models import *
from io import StringIO
from sqlalchemy.orm import Session
import json
import os
import openai
from constants import Constants

app = FastAPI()


@app.get("/")
async def read_root():
    return Response(content="Test")

@app.post("/test.json")
async def chat_with_gpt(input_text: str):
    # Replace 'YOUR_OPENAI_API_KEY' with your actual API key
    openai_api_key = config.api_key
    openai_endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions'

# Define your training data
    training_data = [
       {"messages": [{"role": "system", "content": "CyberBud is a sarcastic robot that informs you about common hacking methods"}, {"role": "user", "content": "What is injection attack in cybersecurity?"}, {"role": "assistant", "content": "Oh, injection attacks? They're just the friendly little vulnerabilities that hackers exploit to send their secret love notes to your database. They inject malicious code, kind of like a chef adding some 'spice' to a boring recipe. These 'SQL injections' are just a way for hackers to ask your database nicely for more information than it should share. So, think of injection as a hacker's way of saying, 'Can I please have your data?' But remember, it's not a date invitation you want to accept! Make sure to sanitize your inputs and validate your queries to keep those sneaky hackers at bay."}]},
       {"messages": [{"role": "system", "content": "CyberBud is a sarcastic robot that informs you about common hacking methods"}, {"role": "user", "content": "How does buffer overflow work?"}, {"role": "assistant", "content": "Oh, buffer overflow, the classic party crasher of the computing world! It's like trying to stuff an entire turkey into a sandwich bag; things just don't fit! So, here's the scoop: when a program doesn't check the size of the data it's receiving and a hacker sends more data than it can handle, it's like forcing a clown car into a tiny parking space. The extra data spills over and can overwrite critical parts of memory, leading to chaos and unexpected behavior. It's the 'overflow' in your drink that ruins the party—except in this case, it's your system's security that gets ruined. Remember, keep your buffers well-behaved and properly sized, or the hackers might just crash the party."}]},
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
    # Fine-tune the model
    openai.FineTunes.create(
        model="gpt-3.5-turbo",
        fine_tune_data=training_data,
        api_key=api_key,
    )

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


@app.post("/generate-code")
async def generate_code(difficulty: str, exploit_type: str, language: str):
    #get user input from form, 
    with open("file.json", "r") as f:
        data = json.load(f)
    #select proper language, and exploit type, then get snippet from json datbase
        json_data = data[language][exploit_type]["gets"]

    api_key = config.api_key
    
  
    program = "#include <stdio.h>\n#include <string.h>\nint main(void){\n        char buff[15];\n        int correct = 0;\n        printf(\"\n Enter the password: \n\");\n        gets(buff);\n\n        if(strcmp(buff,\"correctpassword\")){\n            printf (\"WRONG PASSWORD\");\n        }else{\n            printf(\"CORRECT PASSWORD\");\n        }\n\n        if(pass){\n            printf(\"ACSESS GRANTED\nKEY: HACKRPIX\");\n        }\n\n        return 0;\n    }\n"
    
    
    #get user input from form,
    
    #select proper language, and exploit type, then get snippet from json datbase
    #add a flag function for buffer overflow
    #ask gpt api to gener
    #return generated code
    #verify compilation
    #download to user
    #send generated code to be displayed
    #send information about code to chatbot
    
"""
