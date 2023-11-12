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
# Start the Adonis.js application
CMD ["node", "ace", "serve"]
