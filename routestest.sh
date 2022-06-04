#!/bin/bash

echo "checking localhost:9001"


hash=$(curl -X POST http://localhost:9001/messages  -d '{"destination" : "STRING", "message" : "STRING", "number" : 333}' -H "content-type: application/json")


SUB='correctly'
  if [[ "$hash" == *"$SUB"* ]]; then
    echo "Correct"
  else
    echo "incorrect"
  fi


hash2=$(curl -X POST http://localhost:9001/messages  -d '{ "message" : "STRING", "number" : 333}'  -H "content-type: application/json")


SUB2='incorrect'

  if [[ "$hash2" == *"$SUB2"* ]]; then
    echo "Correct"
  else
    echo "incorrect"
  fi








