# 05 - Capstone Cloud-Ready App Checklist

This section connects the Docker modules to a realistic cloud-ready application workflow.

## Goal

Design a small application that can be built, run locally with Docker, and prepared for cloud deployment.

## Suggested Capstone

A simple job application tracker with:

- Node.js API
- PostgreSQL database
- Static frontend served with Nginx
- Docker Compose for local development
- Cloud deployment notes for future hosting

## Step-by-Step Build Plan

This is a future capstone idea that combines the three earlier Docker examples into one realistic project.

### 1. Create the project structure

```text
capstone-job-tracker/
  api/
  frontend/
  database/
  docker-compose.yml
  README.md
```

### 2. Build the API container

Create a small Node.js API with these endpoints:

- `GET /health` to confirm the API is running
- `GET /roles` to return job application records from PostgreSQL

The API should have its own `Dockerfile` and run on port `3000` inside the container.

### 3. Add PostgreSQL with seed data

Use a PostgreSQL service in `docker-compose.yml`. Add an SQL seed file that creates a simple `roles` table with sample job application records.

Example fields:

- `id`
- `title`
- `company`
- `stage`

### 4. Connect the API to the database

Use environment variables in Docker Compose so the API can connect to PostgreSQL without hardcoding secrets. The API should read from the database and return records through `/roles`.

### 5. Add a static frontend

Create a simple HTML/CSS frontend that displays the purpose of the project and links to the API endpoints. Serve it from an Nginx container.

### 6. Run the full project locally

The complete app should start with one command:

```bash
docker compose up --build
```

Expected local services:

- Frontend: `http://localhost:8080`
- API health check: `http://localhost:3000/health`
- API roles endpoint: `http://localhost:3000/roles`

### 7. Document cleanup commands

Include commands for stopping containers and removing volumes when testing is finished.

```bash
docker compose down
docker compose down -v
```

### 8. Prepare cloud deployment notes

Add notes explaining how the project could later be deployed to Google Cloud Run, App Engine, or another cloud platform. This does not need to be fully deployed yet.

## Minimum Checklist

- [ ] API has a `/health` endpoint
- [ ] API reads data from PostgreSQL
- [ ] Database has seed data
- [ ] Frontend can be served with Nginx
- [ ] Project runs with `docker compose up --build`
- [ ] README explains setup and cleanup
- [ ] Screenshots show working endpoints
- [ ] Secrets are not committed to GitHub

## Portfolio Explanation

Built a Docker-based cloud deployment guide demonstrating containerised Node.js services, PostgreSQL with Docker Compose, Nginx static frontend hosting, troubleshooting, and cloud deployment preparation.

## Future Extensions

- Add GitHub Actions for automated checks
- Add a `.env.example` file
- Add API tests
- Add an architecture diagram
- Add Cloud Run or App Engine deployment notes
- Add security notes for environment variables and secrets
