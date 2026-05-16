# Docker Troubleshooting Notes

Common Docker issues and how to investigate them.

## Port Already In Use

Error:

```text
Bind for 0.0.0.0:3000 failed: port is already allocated
```

Fix:

```bash
docker ps
docker stop container-name
```

Or run on a different host port:

```bash
docker run -p 3002:3000 image-name
```

## Container Exits Immediately

Check logs:

```bash
docker logs container-name
```

Common causes:

- missing dependency
- incorrect start command
- application crash
- missing environment variable

## Rebuild Without Cache

```bash
docker build --no-cache -t image-name .
```

## Docker Compose Database Not Ready

If the API starts before the database, add a health check and `depends_on` condition in `docker-compose.yml`.

## Remove Old Compose Volumes

If database seed data is not refreshing:

```bash
docker compose down -v
docker compose up --build
```

## Check Container Shell

```bash
docker exec -it container-name sh
```

## Check Container Network

```bash
docker network ls
docker network inspect network-name
```

## General Debug Checklist

- Is Docker Desktop running?
- Is the port already in use?
- Did the image build successfully?
- Is the container still running?
- Do the logs show an application error?
- Are environment variables set correctly?
- Can containers reach each other by service name?
