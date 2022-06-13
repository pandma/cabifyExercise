# Exercise 8


## Description 


For this exercise we have decided to spin up multiple instances for our message Service. This way we can make sure that our service will keep working if any instance fails.
After creating the instances we use a load balancer to distribute the traffic equivalent to every instance, in this case I am using

<a src="http://www.haproxy.org/">HAProxy</a>.
Our url is now http://localhost:8080, this is the load balancer url that will then distribute the traffic to the ports 9007,9008 and 9009.
we have also added a new endpoints:


## GET /health


This end endpoint is in charge of checking the status of our instance and every time we start our app, the load balancer will send a request to this endpoint to check the status.
 
 
## GET /haproxy?stats
 
 
you can also check this endpoint and log in as:
user:admin
password:admin
to check the status of each instance.



## Load balancer Schema


<div align="center">
<img src="https://assets.digitalocean.com/articles/high-availability/Diagram_2.png" width="300" height="600"/>
</div>



