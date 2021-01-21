# Get container ID
$ docker ps

# Enter the container
$ docker exec -it <container id> /bin/bash

# Build docker image
$ docker build -t sbayar/node-web-app .

# Run docker image
$ docker run -p 80:8080 sbayar/node-web-app

# Stop a container
$ docker stop <container id>

# Remove an image
$ docker image rm -f <image id>

# Start docker-compose
$ docker-compose up

# Browser
Visit: http://localhost:80