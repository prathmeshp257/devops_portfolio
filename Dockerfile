# Use the Node.js official image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .
RUN NODE_OPTIONS=--openssl-legacy-provider npm run build
# Build the application
RUN npm run build

# Expose the port the app will run on (optional, useful for local development)
EXPOSE 3000

# Command to serve the built app using a lightweight web server
# Uncomment if you are using serve or another server
# RUN npm install -g serve
# CMD ["serve", "-s", "build"]

# Default command (use only if you need a custom script)
CMD ["npm", "start"]
