# assumes that `yarn build` had been executed
FROM nginx:stable-alpine
COPY dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
