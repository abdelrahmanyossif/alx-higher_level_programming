#!/bin/bash
# Display all HTTP methods the server accepts for the given URL
curl -sI "$1" | grep "Allow" | cut -d " " -f2-

