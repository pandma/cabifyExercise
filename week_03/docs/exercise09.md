# Exercise 9


## Description 


In this exercise we have added a consul, our load balancer is running on port 48151. Consul works in combination with the load balancer, registering any changes to the replicas that are running.
We have also added a new version to our service, we have called it service-v2.

<a src="https://hub.docker.com/_/consul">consul</a>.

we have also added a new endpoints:


## GET /version


This end endpoint is in charge of checking what version we are using for each instance.


## Testing


We have use the command ab -n 1000 localhost:48151/version. 
We have only deployed your new version to 1 out of 4 instances. Only about 25% (around 100) of the requests were getting the new response.
 

 
