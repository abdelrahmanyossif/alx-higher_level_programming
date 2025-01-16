#!/bin/bash
# Send a GET request to the provided URL and display the body of a 200 response
curl -s "$1" | wc -c
