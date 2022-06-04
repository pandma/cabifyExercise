#!/bin/bash

echo "checking localhost:9001"


hash=$(curl -X POST http://localhost:9001/messages  -d '{"destination" : "STRING", "message" : "STRING", "number" : 333}' -H "content-type: application/json")
 echo $hash

output1={"message : message sent correctly"}                                         

SUB='correctly'
if [[ "$hash" == *"$SUB"* ]]; then
  echo "Correct"
else
  echo "incorrect"
fi



hash2=$( curl -X POST http://localhost:9001/messages  -d '{"fakedestination" : "STRING", "message" : "STRING","number" : 333}'  -H "content-type: application/json")


output2={"message": "destination is incorrect"}                                         

SUB2='incorrect'
if [[ "$hash2" == *"$SUB2"* ]]; then
  echo "Correct"
else
  echo "incorrect"
fi
# curl -X POST http://localhost:9001/messages  -d '{"destination" : "STRING", "fakemessage" : "STRING"}'  -H "content-type: application/json" -v

# curl -X POST http://localhost:9001/messages  -d '{ fakeJson : "STRING", "fakemessage" : "STRING"}'  -v

# curl -X GET http://localhost:9001/messages   


