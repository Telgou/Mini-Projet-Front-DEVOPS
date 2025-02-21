# Use the official Node.js image as the base image
FROM node:18.18

# Set the working directory
WORKDIR /usr/src/app

# Install Angular CLI globally
RUN npm install -g @angular/cli@15

# Copy package.json and package-lock.json files

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the Angular application
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/* /usr/share/nginx/html/
COPY /nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 4200 (default port used by ng serve)
EXPOSE 4200

# Command to serve the Angular application using ng serve
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
