FROM node:8-alpine AS build

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY . .

RUN npm install && npm cache clean --force

EXPOSE 8080

CMD npm start