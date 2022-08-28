FROM node:node:16.16-alpine

ENV LC_ALL = C.UTF-8

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173


CMD npm run dev
