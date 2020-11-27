[![release](https://github.com/mrazjava/booklink-frontend-vue/workflows/release/badge.svg?branch=master)](https://github.com/mrazjava/booklink-frontend-vue/actions?query=workflow%3Arelease)
[![pre-release](https://github.com/mrazjava/booklink-frontend-vue/workflows/pre-release/badge.svg?branch=master)](https://github.com/mrazjava/booklink-frontend-vue/actions?query=workflow%3Apre-release)
[![snapshot](https://github.com/mrazjava/booklink-frontend-vue/workflows/snapshot/badge.svg?branch=develop)](https://github.com/mrazjava/booklink-frontend-vue/actions?query=workflow%3Asnapshot)
# Web UI for Booklink

Based on Vue.js. If you wish to try booklink locally without messing around with the sources, consider running [sandbox](https://github.com/mrazjava/booklink/tree/master/sandbox) from the top level project.

## It's Alive
Booklink is branded as booklinktrove.com. Because we are self funded for the time being, we spin production environment only periodically to test releases. Keeping production environment down until we are ready with the go-live helps us save on our hosting bill. However, our pre-release environment is available 24/7, though it is an environment hosted in European zone with fairly small resources.

- [production](https://www.booklinktrove.com)
- [pre-release](ec2-35-159-52-93.eu-central-1.compute.amazonaws.com)

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
./sandbox.sh local -f -b develop
```

## Notes
Info worthy enough to stick around here.
### yarn
Helpful yarn commands
```
# creates yarn.lock by evaluating dependency specification off package.json
yarn install
# similar to mvn clean
yarn cache clean
# evaluate and interactively upgrade selected dependencies
yarn upgrade-interactive
# evaluate dependency of a project
yarn why yargs-parser
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

##
We recommend to run docker image from sandbox, however it can be run directly:
```
docker run -it -p 8090:80 booklink-frontend-vue:local
```
In rare cases it may be handy to run a local image against AWS API:
```
docker build --build-arg VUE_APP_BACKEND_URL=http://ec2-3-124-3-167.eu-central-1.compute.amazonaws.com -t mrazjava/booklink-frontend-vue:local .
```

## Useful Resources
[Dynamic Layouts](https://markus.oberlehner.net/blog/dynamic-vue-layout-components/)
