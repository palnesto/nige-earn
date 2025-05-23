# Use the official Node.js image.
FROM node:20-alpine3.20 AS base

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only the package.json and lock file to leverage Docker's cache
COPY package.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the client admin app
FROM base AS client-nige-earn-build

# Run the build script
RUN pnpm run build

# Final production image with Nginx
FROM nginx:alpine AS client-react-nige-earn

# Copy the built files from the client-admin-build stage
COPY --from=client-nige-earn-build /app/dist /usr/share/nginx/html

# Copy the nginx configuration file
COPY --from=client-nige-earn-build /app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]