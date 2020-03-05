# assumes that `yarn build` had been executed
FROM nginx:stable-alpine
COPY dist /usr/share/nginx/html
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]