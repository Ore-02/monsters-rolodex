# Use the official Node image for development
FROM node:23-alpine3.19
# Sets Working Directory in the Container
WORKDIR /app
# Copy package.json to install dependencies
COPY package*.json ./
# Install the dependencies
RUN npm install
# Copy the rest of the application code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

