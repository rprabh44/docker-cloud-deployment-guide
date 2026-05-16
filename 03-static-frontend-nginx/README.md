# 03 - Static Frontend With Nginx

This module shows how to serve static frontend files from an Nginx container.

This pattern is useful for production builds from:

- Angular
- Ionic Angular
- React
- Vue
- Static HTML/CSS projects

## What This Module Covers

- Serving static frontend files with Nginx
- Writing a simple Nginx configuration
- Building a frontend container image
- Running a static site locally through Docker
- Connecting frontend containerisation to cloud deployment preparation

## Run With Docker

Build the image:

```bash
docker build -t static-frontend-nginx .
```

Run the container:

```bash
docker run --name static-frontend -p 8080:80 static-frontend-nginx
```

Open:

```text
http://localhost:8080
```

## Cleanup

Stop the container:

```bash
docker stop static-frontend
```

Remove the container:

```bash
docker rm static-frontend
```

## How This Maps To Angular/Ionic

In a real Angular or Ionic project, the workflow is usually:

```bash
npm install
npm run build
```

The generated production files are then copied into the Nginx image. For Angular, this is usually the `dist/` folder.
