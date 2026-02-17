# Stage: Serve
FROM nginx:alpine

# Copy local build artifacts
COPY dist/velo-app/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
