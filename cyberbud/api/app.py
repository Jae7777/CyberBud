from fastapi import FastAPI, HTTPException, Request, Response, UploadFile, Form, File, Depends
from starlette.middleware.sessions import SessionMiddleware
from fastapi_cache import FastAPICache
from fastapi_cache.backends.inmemory import InMemoryBackend
from fastapi_cache.decorator import cache
from fastapi_cache.coder import PickleCoder
from fastapi import Depends
#Ok idk if we need all of this stuff
from api_models import *
from io import StringIO
from sqlalchemy.orm import Session
import json
import os
from constants import Constants

app = FastAPI()

@app.get("/")
async def read_root():
    return Response(content="Test")

