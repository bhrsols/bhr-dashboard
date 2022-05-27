FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /out /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]