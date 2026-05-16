# 02 - Docker Compose With PostgreSQL

This example uses Docker Compose to run two services:

- A Node.js API
- A PostgreSQL database

It shows how containers communicate using service names and environment variables.

## What This Teaches

- Multi-container applications
- Docker Compose services
- PostgreSQL container setup
- Environment variables
- Volumes for database persistence
- Health checks and service dependencies

## Run With Docker Compose

```bash
docker compose up --build
```

Open:

```text
http://localhost:3001
http://localhost:3001/roles
http://localhost:3001/health
```

Stop the services:

```bash
docker compose down
```

Stop and remove the database volume:

```bash
docker compose down -v
```

## Why This Matters

Many real applications use more than one service. Docker Compose makes it easier to run an app, database, and supporting services locally with one command.

## Security Note

The database password in this demo is intentionally simple because it is a local learning project. In a real project, secrets should be stored in environment variables, secret managers, or deployment platform settings.
