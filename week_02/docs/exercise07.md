# Exercise 7

## Endpoints Credit Service


| METHOD |             URL              |       DESCRIPTION          | 
| ------ | :--------------------------: | ----------------:          |
| POST   |/credit                       | update the credit amount   |
| GET    |/credit                       | show  the credit amount    |


## Endpoints Message Service


| METHOD |             URL              |       DESCRIPTION      | 
| ------ | :--------------------------: | ----------------:      |
| POST   |/message                      | post a messages        |
| GET    |/message/:messageId/status    | show message status    |


# Description 

For this exercise we have 

## POST /message Endpoint


For this Endpoint we have decided to leave things for later,
We are saving the message whith a PROCESSING status and we send it to redis Queue that will process this message later on.
This Endpoint recives a body in JSON and responds whith the ID of the processing message.



## GET /message/:messageId/status


This Enpoint has been created to check status of this message, this way you can check if your message have been procces or havent been sent yet.
This Enpoint response is a JSON string with a single field status that will contain the status of the message requested.