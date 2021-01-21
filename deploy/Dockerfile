FROM node:10

# Create app directory
WORKDIR /docker-app

# Install app dependencies
COPY ./public /docker-app/static/
COPY ./server.js /docker-app/
COPY ./utilities.js /docker-app/
COPY ./data /docker-app/data/
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source (copy all)
# COPY . .

# EXPOSE 8080
# CMD [ "node", "server.js" ]

# USER node