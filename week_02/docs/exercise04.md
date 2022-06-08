## exercise 4

# endpoints

| METHOD |             URL              |       DESCRIPTION | 
| ------ | :--------------------------: | ----------------: |
| POST   |/credit                       | updates credit    |
| POST   |/message                      | post a messages   |



# post credit

the POST /credit route has been updated, now the body is:
{
    "amount":Number,
}
This route is been created to let the users update ther budget valance, this way they can keep sending messages.



# post a message

the POST /messege route has been updated, now the body is:
{
    "destiantion":"String",
    "message":"String",
},

this route has been updated, now it checks if the credit is above 1 to let the user send the message, if the credit is under 1 it would retun a message:'Messsage not send add budget'
