# testing My Api

## Endpoint tested

| METHOD |             URL              |       DESCRIPTION | 
| ------ | :--------------------------: | ----------------: |
| POST   |/messages                     | post a message    |

## expected request
expected body
{
  "destination": "STRING",
  "message": "STRING"
}
experted output
"OK"

- While performing this operation with the espected body we see a correct output and a correct
handle of expected status code: 500 ERROR.

## unexpected body request with correct format
request body
{
  "wwwwww": "STRING",
  "wwwwwww": "STRING"
}
experted output
error message status code 400

- Performing this operation with this body we see a correct handle of status code: 400 ERROR.

## unexpected body request with uncorrect format
request body
{
  "destination": "STRING",
  bodydcdv: "STRING"
}
experted output
"error message"

- Performing this operation with this body we get an unexpected JSON element ERROR.

## Final Thoughts

After performing the tests myself and Arseni decided to stop the wrong payloads fron beeing send to the messageapp server by creating a middleware that would stop some of the error and return an apropiate message to the client, this way we would redude the trafic of unecesary request to the messageapp Api.

	
   