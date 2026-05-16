# 01 - Basic Node.js Docker App

This module introduces Docker by containerising a small Node.js API.

## What This Module Covers

- Creating a Dockerfile
- Building a Docker image
- Running a container locally
- Mapping a container port to localhost
- Checking a simple health endpoint

## Run Locally Without Docker

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

```text
http://localhost:3000/health
```

Expected response:

```json
{ "status": "ok" }
```

## Cleanup

Stop the container:

```bash
docker stop basic-node-app
```

Remove the container:

```bash
docker rm basic-node-app
```

## Key Dockerfile Steps

- `FROM node:20-alpine` uses a lightweight Node.js image.
- `WORKDIR /app` sets the working folder inside the container.
- `COPY package*.json ./` copies dependency files first for build caching.
- `RUN npm install --omit=dev` installs production dependencies.
- `EXPOSE 3000` documents the port used by the app.
- `CMD ["npm", "start"]` starts the server.
