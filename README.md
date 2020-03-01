# Booklink
![backend-master](https://github.com/mrazjava/booklink/workflows/backend-release/badge.svg?branch=master)

## Environments

* `live`: aws
   - not setup yet
   - manual deploy (from pre-release tested AWS ECR docker image)
* `pre`: aws
   - [backend-master:latest](https://github.com/mrazjava/booklink/packages/130548?version=latest) in EC2 as T2.micro: [backend-actuator](http://ec2-3-124-3-167.eu-central-1.compute.amazonaws.com/actuator/info), [backend-swagger](http://ec2-3-124-3-167.eu-central-1.compute.amazonaws.com/swagger-ui.html)
   - candidate release, QA testing
   - automated (github action [ci](https://github.com/mrazjava/booklink/blob/master/.github/workflows/backend-release.yml)) deploy triggered by push/merge to `master`
* `playground`: local, scripted docker-compose
   - safe environment for experimentation, offline demo
   - can run either a stable release or staged release candidate
* `development`: local (maven)
   - programming of new features, bug fixing, depending on branch may be unstable

## Playground Scripts
The fastest way to try booklink locally is to run one of the playground scripts:
```
# candidate release: runs off of latest master branch docker images (github packages)
chmod +x master.sh && ./master.sh
```
or:
```
# staging release: runs off of latest develop branch docker images (github packages)
chmod +x develop.sh && ./develop.sh
```
These scripts are provided for convenience. They accomplish the same thing as `docker-compose` below.

## docker-compose<sup>1</sup>
Composition of docker images is used as a convenience feature to quickly and easily run (or try out) the 
application from a local environment. No need to compile sources or setup anything. From the project root 
directory simply run:
```
docker-compose [-f docker-compose-develop.yml] up
```
Docker will pull the latest candidate release image from github and run it on your machine. Backend will be available 
on port `8080`. Frontend will run on port `8090`.

Candidate release image should be solid, well tested, and the same as what runs in the AWS cloud. However, it may not 
have the latest features. To try the latest stable version, tell docker-compose to run off a staging configuration 
(the optional `docker-compose-develop.yml` file).

Compose does not pull latest images once cached. To make sure compose always runs off of the latest image, tell it to 
`pull` first before going `up`:
```
docker-compose [-f docker-compose-develop.yml] pull [backend|frontend]
```
<sup>1</sup> | Requires [docker](https://docs.docker.com/install/) + [docker-compose](https://docs.docker.com/compose/install/) installation. On Ubuntu for example, this can be done with `sudo apt install docker-compose`, which installs docker-compose directly, and docker (`docker.io` package) indirectly since compose depends on docker.

## Branching / CI Pipeline
Work is done on a `feature/*` branch. Push to feature triggers build with unit tests. Feature is merged 
to `develop`. Merge to develop triggers a full test suite (unit/integration) and builds a snapshot docker 
image pushed to github [packages](https://github.com/mrazjava/booklink/packages). Release is made by merging `develop` into `master`.

* Direct commits to `develop` should be avoided.
* Direct commits to `master` should never happen except for hotfixes. If hotfix is applied to master, it is immediately backported to develop.

Merge to `master` triggers release CI pipeline which:

* builds application from master sources
* builds latest release docker image(s) based on source tree which triggered commit (eg: `booklink-backend`, `booklink-web`)
* pushes latest release docker image to [github packages](https://github.com/mrazjava/booklink/packages) (`web-master`,`backend-master`)
* pushes latest release docker image to AWS ECR (`latest` tag of the above)

`master` version of `booklink/docker-compose.yml` (project root) bootstraps app from release ready images (`-master:latest`). 
As such, image changes to this file from `develop` branch should not be merged.
