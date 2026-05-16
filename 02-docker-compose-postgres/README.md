# 02 - Docker Compose With PostgreSQL

This module uses Docker Compose to run a Node.js API and a PostgreSQL database together.

## What This Module Covers

- Defining multiple services in `docker-compose.yml`
- Connecting an API container to a database container
- Using service names for container networking
- Passing configuration with environment variables
- Persisting database data with volumes
- Using health checks before starting dependent services

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

Expected `/health` response:

```json
{
  "api": "ok",
  "database": "ok"
}
```

## Cleanup

Stop the services:

```bash
docker compose down
```

Stop the services and remove the database volume:

```bash
docker compose down -v
```

## Why This Module Matters

Many real applications depend on more than one service. Docker Compose makes it possible to run an API, database, and supporting services locally with one command.

## Security Note

The database password in this demo is intentionally simple because it is a local learning project. In a real project, secrets should be stored in environment variables, secret managers, or deployment platform settings.
