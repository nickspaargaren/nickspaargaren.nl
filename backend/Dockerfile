FROM node:24-alpine
RUN corepack enable
WORKDIR /app
COPY ./ /app
RUN yarn install --immutable
CMD ["yarn", "dev"]