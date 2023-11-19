# Use an official Node.js runtime as a parent image
FROM node:18-alpine
# Set the working directory in the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install app dependencies
RUN npm install npm -g -y && npm install -y
# Copy the rest of the application code to the working directory
COPY . .
# Expose the port that the app will run on
# EXPOSE 3333
# Apply migrations
RUN node ace migration:run
# Start the Adonis.js application
CMD ["node", "ace", "serve"]
##################################
# ARG NODE_IMAGE=node:16.13.1-alpine

# FROM $NODE_IMAGE AS base
# RUN apk --no-cache add dumb-init
# RUN mkdir -p /home/node/app && chown node:node /home/node/app
# WORKDIR /home/node/app
# USER node
# RUN mkdir tmp

# FROM base AS dependencies
# COPY --chown=node:node ./package*.json ./
# RUN npm ci
# COPY --chown=node:node . .

# FROM dependencies AS build
# RUN node ace build --production

# FROM base AS production
# COPY --chown=node:node ./package*.json ./
# RUN npm ci --production
# COPY --chown=node:node --from=build /home/node/app/build .
# CMD [ "dumb-init", "node", "server.ts" ]
