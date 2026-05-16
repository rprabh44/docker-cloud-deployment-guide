# Google Cloud App Engine Notes

Google Cloud App Engine is a platform-as-a-service option for deploying web applications without managing servers directly.

## Where Docker Fits

Docker helps package an application and its dependencies into a reproducible environment. Even when a deployment platform does not require Docker directly, Docker concepts help with:

- consistent local development
- predictable dependencies
- environment-based configuration
- build automation
- deployment pipelines

## Example App Engine `app.yaml`

```yaml
runtime: nodejs20

env_variables:
  NODE_ENV: production

automatic_scaling:
  min_instances: 0
  max_instances: 1
```

## Deployment Steps

1. Install and authenticate the Google Cloud CLI.
2. Select the correct Google Cloud project.
3. Check that the app runs locally.
4. Add an `app.yaml` file.
5. Deploy with:

```bash
gcloud app deploy
```

6. Open the deployed app:

```bash
gcloud app browse
```

## Good Practice

- Keep secrets out of source code.
- Use environment variables for configuration.
- Set scaling limits for cost control.
- Check logs after deployment.
- Test locally before deploying.

## Useful Commands

View project configuration:

```bash
gcloud config list
```

Set the project:

```bash
gcloud config set project PROJECT_ID
```

Deploy:

```bash
gcloud app deploy
```

View logs:

```bash
gcloud app logs tail
```
