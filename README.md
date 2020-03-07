[![pre-release](https://github.com/mrazjava/booklink-frontend-vue/workflows/pre-release/badge.svg?branch=master)](https://github.com/mrazjava/booklink-frontend-vue/actions?query=workflow%3Apre-release)
# Web UI for Booklink

Based on Vue.js

## Quick Start
Running frontend requires backend.
```
docker-compose up # start backend and all the required dependencies
yarn install
yarn serve
```
Backend will run on port `8080`. Frontend will run on port `8090`.

```
docker run -it -p 8090:80 booklink-web
docker build --build-arg VUE_APP_BACKEND_URL=http://ec2-3-124-3-167.eu-central-1.compute.amazonaws.com -t booklink .
```

**