FROM node:10-alpine

EXPOSE 8080

WORKDIR /home/node/app

# Bower requires Git
RUN apk add git

COPY package*.json /home/node/app/

RUN echo "$(pwd)"
RUN npm install

COPY . .

RUN chown -R node:node /home/node/app/dev/
RUN chown -R node:node /home/node/app/dist/
USER node

RUN npm run build

CMD npm start
