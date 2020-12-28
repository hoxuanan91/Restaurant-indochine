FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
# Copy the respective nginx configuration files
COPY nginx_config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]