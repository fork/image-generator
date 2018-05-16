FROM node:latest

RUN apt-get update \
    && apt-get -y install --no-install-recommends \
        imagemagick

RUN npm install yarn -g

RUN yarn

WORKDIR /usr/app

CMD yarn start
