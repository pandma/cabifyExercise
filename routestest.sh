#!/bin/bash

echo "hello world"

curl -d "destination=STRING" -d  "message=STRING" http://localhost:9001/messages

curl -d "fakeDescrption=STRING" -d  "message=STRING" http://localhost:9001/messages

curl -d "destination=STRING" -d  "wrongMessage=STRING" http://localhost:9001/messages
