# Docker Command Cheat Sheet

A quick reference for commands used across this project.

## Check Docker

```bash
docker --version
docker ps
```

## Images

Build an image:

```bash
docker build -t image-name .
```

List images:

```bash
docker images
```

Remove an image:

```bash
docker rmi image-name
```

## Containers

Run a container with port mapping:

```bash
docker run --name container-name -p 3000:3000 image-name
```

List running containers:

```bash
docker ps
```

List all containers:

```bash
docker ps -a
```

Stop a container:

```bash
docker stop container-name
```

Remove a stopped container:

```bash
docker rm container-name
```

View logs:

```bash
docker logs container-name
```

Open a shell inside a container:

```bash
docker exec -it container-name sh
```

## Docker Compose

Start services:

```bash
docker compose up --build
```

Start services in the background:

```bash
docker compose up --build -d
```

Stop services:

```bash
docker compose down
```

Stop services and remove volumes:

```bash
docker compose down -v
```

Validate Compose configuration:

```bash
docker compose config
```
