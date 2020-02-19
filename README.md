# Booklink
![backend-master](https://github.com/mrazjava/booklink/workflows/backend-release/badge.svg?branch=master)

## Branching / CI Pipeline
Work is done on a `feature/*` branch. Push to feature triggers build with unit tests. Feature is merged 
to `develop`. Merge to develop triggers a full test suite (unit/integration) and builds a snapshot docker 
image pushed to github packages. Release is made by merging `develop` into `master`.

* Direct commits to `develop` should be avoided.
* Direct commits to `master` should never happen except for hotfixes. If hotfix is applied to master, it is immediately backported to develop.

Merge to `master` triggers release CI pipeline which:

* builds application from master sources
* builds latest release docker image(s) based on source tree which triggered commit (eg: `booklink-backend`, `booklink-web`)
* pushes latest release docker image to github (`web-master`,`backend-master`)
* pushes latest release docker image to AWS ECR (`latest` tag of the above)

`master` version of `booklink/docker-compose.yml` (project root) bootstraps app from release ready images (`-master:latest`). As such, image changes to this file from `develop` branch should not be merged.
