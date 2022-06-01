## testing Arseni Api

# Endpoint tested

| METHOD |             URL              |       DESCRIPTION | 
| ------ | :--------------------------: | ----------------: |
| POST   |/messages                     | post a message    |

# expected request
expected body
{
  "destination": "STRING",
  "message": "STRING"
}
experted output
"OK"

-while performing this operation with the espected body we see a correct output and a correct
handle of expected status code: 500 ERROR.

# unexpected body request with correct format
request body
{
  "wwwwww": "STRING",
  "wwwwwww": "STRING"
}
experted output
"OK"

-while performing this operation with the espected body we see a correct output and a correct
handle of expected status code: 500 ERROR.

# unexpected body request with uncorrect format
request body
{
  "destination": "STRING",
  bodydcdv: "STRING"
}
experted output
"OK"

-while performing this operation with the espected body we see a correct output and a correct
handle of expected status code: 500 ERROR.
