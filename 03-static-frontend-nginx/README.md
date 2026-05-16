# 03 - Static Frontend With Nginx

This example shows how to serve static frontend files from an Nginx container.

This pattern is useful for:

- Angular
- Ionic Angular
- React
- Vue
- Any static production build

## What This Teaches

- Serving static frontend files with Nginx
- Writing a simple Nginx config
- Containerising frontend output
- Preparing frontend apps for cloud deployment

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

Stop and remove:

```bash
docker stop static-frontend
docker rm static-frontend
```

## How This Maps To Angular/Ionic

In a real Angular or Ionic project, the workflow is usually:

```bash
npm install
npm run build
```

Then the generated production files are copied into the Nginx image. For Angular this is usually the `dist/` folder.
