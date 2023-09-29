# Use the official Node.js runtime parent image
FROM node:18.18.0

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json to the app directory
COPY package.json .

# Install app dependencies
RUN npm install

# Generate prisma client
RUN npx prisma generate

# Copy the rest of your app code to the app directory
COPY . .

# Expose the port your app is running on
EXPOSE 3000

# Define the command to start your app
CMD [ "npm", "run", "start:dev" ]
