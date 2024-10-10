# Dockerfile

# Step 1: Build the Next.js app
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Next.js app
RUN npm run build

# Step 2: Serve the Next.js app
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the build files from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]
