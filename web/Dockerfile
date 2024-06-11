# Build
FROM node:16-slim as builder
WORKDIR /app
RUN mkdir common; mkdir web

WORKDIR /app/common
COPY common/package*.json ./
RUN npm install
COPY common .

WORKDIR /app/web
COPY web/package*.json ./
RUN npm install
COPY web .

WORKDIR /app/web
CMD node src/index.js
