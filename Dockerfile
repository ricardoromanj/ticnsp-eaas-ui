FROM nginx:1.13.0-alpine
MAINTAINER Ricardo Roman <ricardo.roman@ticnsp.org>

COPY ./dist/* /usr/share/nginx/html/
EXPOSE 80
