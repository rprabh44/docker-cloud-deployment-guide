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
