# Step 1: Use Node.js for building the React app
FROM node:16-alpine as build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Use a lightweight nginx image to serve the React app
FROM nginx:alpine

# Copy the built React app from the previous stage to nginx's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the server
EXPOSE 80

# Start nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
