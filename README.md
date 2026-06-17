# EnvLint

Static environment-variable linting reference for `envlint.com`.

## Hosting

- Production: `https://envlint.com`
- Radicchio site: `7` (`envlint`)
- Source deploy: push to `main` on `sheetgenius/envlint`; GitHub sends a signed webhook to Radicchio, which publishes the repository root.
- Repo-specific deploy secrets: none. `config/deploy.credentials.yml` intentionally has an empty selector set; the webhook secret lives in Radicchio and GitHub, not in this repo.

## Verification

- Static smoke: `curl -fsS https://envlint.com/ -o /dev/null`
- Optional browser smoke: `npm run qa:smoke`
