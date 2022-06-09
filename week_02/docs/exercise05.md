# exercise 4

## Create a replica instance


For this exercise he have Define a new Mongo instance. 
we are using this back up to replicate the data from the main database.


## Data replication


Budget model and message model have been updated, so it can be replicated in both databases,
The data of the backup database is being updated every time there is an even on the main database.




## Reliability of transactions


The updateBudget is the service in charge of modifying the amount of the badge, for this reason it has a lock to ensure synconity in the transactions, this serves also has to ensure that the budget is exactly the same in both backup and the main database.
If the main route fails, it will return an error, and it the main one works out well, but the backup fails, it will return the money so both databases are an exact replica all the time 



<h3 align="center"> Transaction Schema</h3>


<div align="center">
<img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1654622333/Screenshot_7_btzlki.png" width="500" height="300"/> 
<div/>
