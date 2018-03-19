FROM node

WORKDIR /tmp
COPY package.json yarn.lock /tmp/
RUN yarn install

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN node_modules/.bin/webpack


CMD [ "yarn", "run", "start" ]

EXPOSE 4000
