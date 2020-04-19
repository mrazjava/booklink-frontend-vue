# assumes that `yarn build` had been executed
FROM nginx:stable-alpine
RUN apk add --no-cache tzdata
ENV TZ=Europe/Berlin
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY dist /usr/share/nginx/html
COPY entrypoint.sh /
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]
