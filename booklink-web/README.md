# Web UI for Booklink

Based on Vue.js

```
docker run -it -p 8090:80 booklink-web
docker build --build-arg VUE_APP_BACKEND_URL=http://ec2-3-124-3-167.eu-central-1.compute.amazonaws.com -t booklink .
```
.....