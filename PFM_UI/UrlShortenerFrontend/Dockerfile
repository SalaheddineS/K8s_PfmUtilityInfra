# Use an official Node.js runtime as a parent image for building
FROM node:latest AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project source code into the container
COPY . .

# Build the project
RUN npm run build

# Use an official Nginx runtime as the final image
FROM nginx:latest

# Copy only the 'dist' directory from the builder stage into the Nginx 'html' directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to allow incoming HTTP traffic
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
