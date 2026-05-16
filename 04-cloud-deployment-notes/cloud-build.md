# Google Cloud Build Notes

Google Cloud Build can automate builds and deployments from source control.

## Why CI/CD Matters

CI/CD helps teams:

- reduce manual deployment work
- make deployments repeatable
- catch build errors earlier
- connect Git commits to deployment actions
- improve consistency across environments

## Example `cloudbuild.yaml`

```yaml
steps:
  - name: "gcr.io/cloud-builders/npm"
    args: ["install"]

  - name: "gcr.io/cloud-builders/npm"
    args: ["test"]

  - name: "gcr.io/cloud-builders/gcloud"
    args: ["app", "deploy", "--quiet"]
```

## Docker Image Build Example

```yaml
steps:
  - name: "gcr.io/cloud-builders/docker"
    args: ["build", "-t", "gcr.io/$PROJECT_ID/demo-app:$SHORT_SHA", "."]

  - name: "gcr.io/cloud-builders/docker"
    args: ["push", "gcr.io/$PROJECT_ID/demo-app:$SHORT_SHA"]
```

## Recommended Pipeline Stages

1. Install dependencies
2. Run tests
3. Build the app
4. Build Docker image if needed
5. Push image to registry
6. Deploy to the target platform
7. Check logs and deployment status

## Good Practice

- Keep build files small and readable.
- Use environment variables or secret managers for sensitive values.
- Add tests before deployment.
- Use clear commit messages.
- Document rollback steps.
