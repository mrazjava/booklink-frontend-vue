[![pre-release](https://github.com/mrazjava/booklink-frontend-vue/workflows/pre-release/badge.svg?branch=master)](https://github.com/mrazjava/booklink-frontend-vue/actions?query=workflow%3Apre-release)
# Web UI for Booklink

Based on Vue.js. If you wish to try booklink locally without messing around with the sources, consider running sandbox 
from the parent project.

## Quick Start
Running frontend requires backend.
```
docker-compose up # start backend and all the required dependencies
yarn serve
```
Backend will run on port `8080`. Frontend will run on port `8090`.

## Notes
Info worthy enough to stick around here.
### yarn
If there are problems executing quick start, try `yarn install` which will re-generate all detailed dependency info 
off `package.json` and will create updated version of `yarn.lock`.
### Reporting GIT on vue
Git info is fetched via `git-revision-webpack-plugin`:
```
yarn add --dev git-revision-webpack-plugin
``` 
Configured in `vue.config.js`. To verify `HEAD` displayed in the running app against the actual git, from project 
root run: `git rev-parse --short HEAD`.


## Other
```
docker run -it -p 8090:80 booklink-web
docker build --build-arg VUE_APP_BACKEND_URL=http://ec2-3-124-3-167.eu-central-1.compute.amazonaws.com -t booklink .
```