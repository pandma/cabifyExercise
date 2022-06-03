<h1 align="center">Cabify Backend Bootcamp</h1>

<h2 align="center">Description</h2>

This exercise is a Rest Api we created to get the messages fron the client and send them to the Cabify/message app.
 
Why don't we send the messages directly from the client to the Cabify/message app Api?
 
between the client the message app is our api,
 this api is in charge of:
 
- recording every message we get from the client and saving it in our database, so we can have a record of every message
- give each message a status, if the message is correctly sended it will have a confirmed status and if the message wasn't sent it will have a rejected status.
- hardle errors, our API is in charge of reducing the traffic of unnecessary request to the message app and returning apropiates errors to the client if anything goes wrong


<h2 align="center"> API Endpoints</h2>

<div align="center"> 

| METHOD |             URL              |       DESCRIPTION |
| ------ | :--------------------------: | ----------------: |
| GET    |/hello                        | test Hello World  |
| POST   |/messages                     | post a message    |
| GET    |/messages                     | get all messages  |

</div>

<h3 align="center"> What each endpoint does?</h3>

- GET /hello :
this endpoint is a test endpoint, it should return a Hello world message.
 
- POST /messages :
This endpoint is our main route to get the message from the client and send it to the message app API, ensuring a correct error handle and saving every message in our record.
 
- GET /messages :
 
This endpoint returned our record of every message that was sent by the client.
 




