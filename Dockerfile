# assumes that `yarn build` had been executed
FROM nginx:stable-alpine
COPY dist /usr/share/nginx/html
COPY entrypoint.sh /
COPY nginx.conf /etc/nginx/nginx.conf
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]