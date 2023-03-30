# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application using yarn
CMD ["yarn", "start"]


we are using the node:14 base image, setting the working directory to /app, and copying the package.json and yarn.lock files to the container. We then run yarn install to install the dependencies, copy the rest of the application code to the container, expose port 3000, and start the application using yarn start.

# To build the Docker image using this Dockerfile, run the following command:
docker build -t myapp .

# To run the Docker container using this image, run the following command:
docker run -p 3000:3000 myapp


This will start the Docker container and map port 3000 on the host machine to port 3000 inside the container, allowing you to access the application from a web browser on the host machine.
