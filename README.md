[![release](https://github.com/mrazjava/booklink-frontend-vue/workflows/release/badge.svg?branch=master)](https://github.com/mrazjava/booklink-frontend-vue/actions?query=workflow%3Arelease)
[![pre-release](https://github.com/mrazjava/booklink-frontend-vue/workflows/pre-release/badge.svg?branch=master)](https://github.com/mrazjava/booklink-frontend-vue/actions?query=workflow%3Apre-release)
[![snapshot](https://github.com/mrazjava/booklink-frontend-vue/workflows/snapshot/badge.svg?branch=develop)](https://github.com/mrazjava/booklink-frontend-vue/actions?query=workflow%3Asnapshot)
# Web UI for Booklink

Based on Vue.js. If you wish to try booklink locally without messing around with the sources, consider running [sandbox](https://github.com/mrazjava/booklink#sandbox) from the top level project.

## It's Alive
- production (not setup yet)
- [pre-release](https://pre.booklinktrove.com)

## Quick Start
Running frontend requires backend. For the purposes of developing the frontent we
usually start backend (staging) from [sandbox](https://github.com/mrazjava/booklink#sandbox):
```
./sandbox.sh local --backend develop
```
Backend will run on port `8080`. Then:
```
yarn install
yarn serve
```
Frontend will run on port `8090`.

## Building Docker Image
```
yarn lint
yarn build
docker build -t mrazjava/booklink-frontend-vue:local .
```

## Sandbox
You can run local docker image with [sandbox](https://github.com/mrazjava/booklink#sandbox):
```
./sandbox.sh local --frontend
```

## Notes
Info worthy enough to stick around here.
### yarn
Helpful yarn commands
```
yarn install         # creates yarn.lock by evaluating dependency specification off package.json
yarn cache clean     # similar to mvn clean
```

### Reporting GIT on vue
Git info is fetched via `git-revision-webpack-plugin`:
```
yarn add --dev git-revision-webpack-plugin
```
Configured in `vue.config.js`. To verify last commit hash displayed on the UI, from the project root check out the
release branch tag and run:
```
git rev-parse --short HEAD
```
The values should match.

## Other
```
docker run -it -p 8090:80 booklink-web
docker build --build-arg VUE_APP_BACKEND_URL=http://ec2-3-124-3-167.eu-central-1.compute.amazonaws.com -t booklink .
```

## Useful Resources
[Dynamic Layouts](https://markus.oberlehner.net/blog/dynamic-vue-layout-components/)
