FROM composer:latest as backend-builder

WORKDIR /app
COPY ./source/backend ./
RUN composer install \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --no-dev \
    --prefer-dist
RUN composer dump-autoload
RUN mkdir -p /build/application /build/system /build/vendor
RUN cp -r /app/application/* /build/application
RUN cp -r /app/system/* /build/system
RUN cp -r /app/vendor/* /build/vendor
RUN cp /app/index.php /build
RUN cp /app/.htaccess /build


FROM node:latest AS frontend

WORKDIR /app
COPY ./source/frontend/package*.json ./
RUN npm install
COPY ./source/frontend .
RUN npm run build   
COPY ./source/frontend/create_views.js ./
RUN node create_views.js
RUN mkdir -p /build/assets/css /build/assets/img /build/assets/js /build/application/views
RUN cp -r /app/dist/assets/css/* /build/assets/css || true
RUN cp -r /app/dist/assets/img/* /build/assets/img || true
RUN cp -r /app/dist/assets/js/* /build/assets/js || true
RUN cp -r /app/dist/application/views/* /build/application/views || true
COPY --from=backend-builder /build /build