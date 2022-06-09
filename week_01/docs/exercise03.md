# exercise 3

## endpoints

| METHOD |             URL              |       DESCRIPTION | 
| ------ | :--------------------------: | ----------------: |
| POST   |/messages                     | post a message    |
| GET    |/messages                     | get all messages  |



## record the messages

the POST /messeges route has been updated, now the body is:
{
    "destiantion":"String",
    "message":"String",
    "number":Number,
}
Also the route has been updated so every time you send a message it is been recorded in our database.
-The message has 3 status:"PENDANT", "CONFIRMED", "REJECTED" , every message starts as "PENDANT" and if it passed the procees it is been undpadet to "CONFIRMED",
but if the message is not send I save it in the database as "REJECTED"



## get the messages

They GET /messages endpoint wil return every message form in database, and wil return a no message error if the data base is empty.
