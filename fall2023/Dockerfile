FROM node:alpine3.18

WORKDIR /app

COPY ./package.json ./yarn.lock ./users.json /app/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start"]