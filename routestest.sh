#!/bin/bash

echo "checking localhost:9001"


curl -X POST http://localhost:9001/messages  -d '{"destination" : "STRING", "message" : "STRING"}'  -H "content-type: application/json" -v

curl -X POST http://localhost:9001/messages  -d '{"fakedestination" : "STRING", "message" : "STRING"}'  -H "content-type: application/json" -v

curl -X POST http://localhost:9001/messages  -d '{"destination" : "STRING", "fakemessage" : "STRING"}'  -H "content-type: application/json" -v

curl -X POST http://localhost:9001/messages  -d '{ fakeJson : "STRING", "fakemessage" : "STRING"}'  -v

