# Booklink
![frontend-master](https://github.com/mrazjava/booklink/workflows/web-master/badge.svg?branch=master)
![backend-master](https://github.com/mrazjava/booklink/workflows/backend-master/badge.svg?branch=master)

## Environments

* `live`
   - AWS, not setup yet
   - manual deploy (from pre-release tested AWS ECR docker image)
* `pre`
   - stable candidate releases (pre-release), hosted on AWS free tier [T2.micro](https://aws.amazon.com/ec2/instance-types/t2/)
   - docker image [web-master](https://github.com/mrazjava/booklink/packages/141719?version=latest) deployed via [task-definition](https://github.com/mrazjava/booklink/blob/master/.aws/web-pre.json) as [frontend](http://ec2-3-124-3-167.eu-central-1.compute.amazonaws.com/)
   - docker image [backend-master](https://github.com/mrazjava/booklink/packages/130548?version=latest) deployed via [task-definition](https://github.com/mrazjava/booklink/blob/master/.aws/backend-pre.json) as [backend](http://ec2-3-124-3-167.eu-central-1.compute.amazonaws.com:8888/actuator/info)
   - QA testing, live demos
   - backend deploy [triggered](https://github.com/mrazjava/booklink/blob/master/.github/workflows/backend-master.yml) automatically upon push/merge to [booklink-backend](https://github.com/mrazjava/booklink/tree/master/booklink-backend) @ `master`
   - frontend deploy [triggered](https://github.com/mrazjava/booklink/blob/master/.github/workflows/web-master.yml) automatically upon push/merge to [booklink-web](https://github.com/mrazjava/booklink/tree/master/booklink-web) @ `master`
* `playground`
   - local machine, scripted docker-compose
   - requires: git, docker, docker-compose
   - safe environment for experimentation, offline demo
   - can run either a stable release or staged snapshot
* `development`
   - local machine development environment w/ Maven, Git, Docker, IDE, etc.
   - requires: git, maven, jdk 11, docker, docker-compose
   - programming of new features, bug fixing, depending on branch may be unstable

## Playground Scripts
The fastest way to try booklink locally is to run the playground script:
```
./booklink.sh [master|develop|build]
```
This script is a wrapper of what otherwise would have been manual invocation of `docker-compose` below.

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
<sup>1</sup> | Requires [docker](https://docs.docker.com/install/) + [docker-compose](https://docs.docker.com/compose/install/) 
installation. On Ubuntu for example, this can be done with `sudo apt install docker-compose`, which installs 
docker-compose directly, and docker (`docker.io` package) indirectly since compose depends on docker. To avoid running 
docker as root, immediately after the installation, main user account should be added to `docker` group: 
`sudo usermod -aG docker ${USER}`.

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
