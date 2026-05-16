# Docker Cloud Deployment Guide

A step-by-step Docker learning project showing how to containerise applications, run multi-service apps locally, and prepare projects for cloud deployment.

This repository was created to strengthen practical Docker, DevOps, and cloud deployment skills through small reproducible examples.

## Project Goals

- Build Docker images from simple applications
- Run containers locally with exposed ports
- Use Docker Compose for app and database services
- Understand environment variables and volumes
- Serve static frontend files with Nginx
- Connect Docker workflows to cloud deployment concepts
- Document troubleshooting steps clearly

## Tech Stack

- Docker
- Docker Compose
- Node.js
- Express
- PostgreSQL
- Nginx
- HTML/CSS
- Google Cloud deployment concepts

## Repository Structure

```text
docker-cloud-deployment-guide/
  01-basic-node-app/
    Dockerfile
    server.js
    package.json
    README.md
  02-docker-compose-postgres/
    app/
      Dockerfile
      server.js
      package.json
    docker-compose.yml
    init.sql
    README.md
  03-static-frontend-nginx/
    Dockerfile
    nginx.conf
    src/
      index.html
      styles.css
    README.md
  04-cloud-deployment-notes/
    gcp-app-engine.md
    cloud-build.md
    troubleshooting.md
  screenshots/
```

## Examples

### 01 - Basic Node.js Docker App

A minimal Express API containerised with a Dockerfile.

Skills shown:

- Dockerfile basics
- Image builds
- Container runs
- Port mapping
- Health endpoint

Run:

```bash
cd 01-basic-node-app
docker build -t basic-node-docker-app .
docker run --name basic-node-app -p 3000:3000 basic-node-docker-app
```

### 02 - Docker Compose With PostgreSQL

A Node.js API connected to a PostgreSQL database using Docker Compose.

Skills shown:

- Multi-container setup
- Service networking
- Environment variables
- Database volumes
- Health checks

Run:

```bash
cd 02-docker-compose-postgres
docker compose up --build
```

Open:

```text
http://localhost:3001/roles
```

### 03 - Static Frontend With Nginx

A static frontend served from an Nginx container.

Skills shown:

- Nginx static hosting
- Frontend containerisation
- Production-style serving
- Pattern for Angular/Ionic deployment

Run:

```bash
cd 03-static-frontend-nginx
docker build -t static-frontend-nginx .
docker run --name static-frontend -p 8080:80 static-frontend-nginx
```

Open:

```text
http://localhost:8080
```

## Screenshots

### Basic Node.js Health Check

![Basic Node.js health endpoint](screenshots/01-health-check.png)

### Docker Compose PostgreSQL Roles Endpoint

![PostgreSQL roles endpoint](screenshots/02-postgres-roles.png)

### Docker Compose API and Database Health Check

![Docker Compose health endpoint](screenshots/03-compose-health.png)

### Static Frontend Served With Nginx

![Static frontend served with Nginx](screenshots/04-nginx-frontend.png)

## What I Learned

- Docker images package application code and dependencies.
- Containers run applications consistently across environments.
- Docker Compose is useful for local multi-service applications.
- Service names such as `db` allow containers to communicate on the same Compose network.
- Volumes keep database data after containers stop.
- Nginx can serve production frontend files in a lightweight container.
- Cloud deployments often build on the same concepts: reproducible builds, configuration files, environment variables, and deployment pipelines.

## Common Commands

List running containers:

```bash
docker ps
```

List all containers:

```bash
docker ps -a
```

List images:

```bash
docker images
```

Stop a container:

```bash
docker stop container-name
```

Remove a container:

```bash
docker rm container-name
```

Remove an image:

```bash
docker rmi image-name
```

View logs:

```bash
docker logs container-name
```

## Portfolio Value

This project demonstrates practical graduate-level DevOps and cloud readiness:

- Docker
- Docker Compose
- Cloud deployment preparation
- CI/CD concepts
- Backend and database services
- Frontend deployment patterns
- Technical documentation

## Future Improvements

- Add GitHub Actions for automated Docker builds
- Add a simple API test script
- Add a Cloud Run deployment example
- Add screenshots and architecture diagrams
- Add a `.env.example` file for environment-based configuration
