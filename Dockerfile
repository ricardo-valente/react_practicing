FROM node:alpine

WORKDIR /usr/web

COPY . .

RUN yarn install

CMD ["npm", "start"]