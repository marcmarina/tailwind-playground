FROM node:18.12-slim

WORKDIR /usr/src/app

COPY ./.yarn ./.yarn

COPY ./package.json ./yarn.lock ./.yarnrc.yml ./postcss.config.js ./tailwind.config.js ./vite.config.ts ./

RUN yarn install

COPY ./src ./src
COPY ./index.html tsconfig.json tsconfig.app.json tsconfig.node.json ./

RUN yarn build
