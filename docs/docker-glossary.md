# Docker Glossary

## Image

A packaged template containing application code, runtime, dependencies, and configuration instructions. Containers are created from images.

## Container

A running instance of an image. A container isolates the application from the host environment.

## Dockerfile

A text file containing instructions for building a Docker image.

## Docker Compose

A tool for defining and running multi-container applications using a `docker-compose.yml` file.

## Service

A named application component in Docker Compose, such as `api` or `db`.

## Volume

Persistent storage used by containers. Volumes are commonly used for databases so data is not lost when a container stops.

## Port Mapping

A connection between a port on the local machine and a port inside a container. Example: `-p 3000:3000`.

## Network

A virtual network that allows containers to communicate. Docker Compose creates a default network for services in the same project.

## Environment Variable

A configuration value passed into an application at runtime, such as a database host, database name, or application port.

## Health Check

A command or endpoint used to confirm that a service is running correctly.

## Nginx

A lightweight web server often used to serve static frontend files or route traffic to backend services.

## CI/CD

Continuous Integration and Continuous Deployment. A workflow that automates building, testing, and deploying code changes.
