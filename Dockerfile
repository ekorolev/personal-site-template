FROM node:10

RUN mkdir site
WORKDIR /site/
COPY ./.env ./.env
COPY server.js server.js
COPY ./app/ ./app/
COPY ./config/ ./config
COPY ./database ./database
COPY ./public/ ./public
COPY ./resources ./resources
COPY ./node_modules ./node_modules
COPY ./package.json ./package.json
COPY ./start ./start
COPY ./content.js ./content.js
COPY ./providers ./providers
COPY ./src ./src

CMD node ./server.js