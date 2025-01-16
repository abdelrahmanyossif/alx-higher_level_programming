#!/bin/bash
# Send a GET request to the provided URL and display the body of a 200 response
curl -s -o /dev/null -w "%{http_code}" "$1" | grep -q "200" && curl -s "$1"

