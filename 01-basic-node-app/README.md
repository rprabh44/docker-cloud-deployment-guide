# 01 - Basic Node.js Docker App

This example shows how to containerise a small Node.js API using a `Dockerfile`.

## What This Teaches

- Creating a Docker image
- Running a container locally
- Exposing a container port
- Using environment variables for the application port

## Run Locally

```bash
npm install
npm start
```

Open:

```text
http://localhost:3000
```

## Run With Docker

Build the image:

```bash
docker build -t basic-node-docker-app .
```

Run the container:

```bash
docker run --name basic-node-app -p 3000:3000 basic-node-docker-app
```

Check the health endpoint:

```bash
curl http://localhost:3000/health
```

Stop and remove the container:

```bash
docker stop basic-node-app
docker rm basic-node-app
```

## Key Dockerfile Steps

- `FROM node:20-alpine` uses a lightweight Node.js image.
- `WORKDIR /app` sets the app folder inside the container.
- `COPY package*.json ./` copies dependency files first for better build caching.
- `RUN npm install --omit=dev` installs production dependencies.
- `EXPOSE 3000` documents the port used by the app.
- `CMD ["npm", "start"]` starts the server.
