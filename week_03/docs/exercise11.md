# Exercise 11
 
 
## Description
 
 
In this exercise we have added metrics to our service. I am using Prometheus to create the metrics, Prometheus is saving the data and then Grafana is sending requests to Prometheus and showing the data with an analytics dashboard.
Links of the tools used:
 
<br/>
<a src="https://grafana.com/">Grafana</a>.
<br/>
<a src="https://prometheus.io/"> Prometheus </a>.
 
## Metrics
 
 
we are exposing the following metrics:
- Requests ratio
- Errors ratio
- Response times
- How long a message stays in the queue
- How long a message takes to get enqueued
- Enqueuing messages ratio
- Errors enqueuing messages ratio
 
 
 
## GET /metrics
 
 
We have added a new endpoint to check the metrics that we are creating in Prometheus.









 