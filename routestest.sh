#!/bin/bash

echo "checking localhost:9001"



hash=$(curl -X POST http://localhost:9001/messages  -d '{"destination" : "STRING", "message" : "STRING", "number" : 333}' -H "content-type: application/json")
 echo $hash

 



# curl -X POST http://localhost:9001/messages  -d '{"fakedestination" : "STRING", "message" : "STRING"}'  -H "content-type: application/json" -v

# curl -X POST http://localhost:9001/messages  -d '{"destination" : "STRING", "fakemessage" : "STRING"}'  -H "content-type: application/json" -v

# curl -X POST http://localhost:9001/messages  -d '{ fakeJson : "STRING", "fakemessage" : "STRING"}'  -v

#curl -X GET http://localhost:9001/messages   


