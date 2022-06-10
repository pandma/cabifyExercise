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


For this exercise we have decided to split our Service into Two Services, one service incharge of the Credit and the other in charge of sending and saving messages.
I have budgetService which is our Credit service and messageService which is our Messages service.


# Queues Schema


<div align="center">
<img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1654845084/Screenshot_9_o1kakf.png" width="600" height="300"/>
</div>


# Async queues explanation


When the client sends a message we save the message with a PROCESSING status and respond to the client with an id of the message.
In the moment we start an async processes that starts by adding this data in the credit Queue, this queue will check the credit valance and update the valance if needed,
Then it returns this data to the message Queue the message queue will send the message if there is enough valance in the credit amount and will update the message depending on the messageApp response.
STATUS:
- "ERROR"
- "OK"
- "TIMEOUT"
- "NOT SENT"
CREDIT:
- True
- False
 
Then the client could check the message status with the given ID.







