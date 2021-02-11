FROM strapi/base:14-alpine

WORKDIR /srv

COPY ./api/package.json ./
COPY ./api/yarn.lock ./

RUN yarn install

COPY ./api/ .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]