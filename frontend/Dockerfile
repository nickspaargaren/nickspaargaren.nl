FROM node:24-alpine
RUN corepack enable
RUN apk add g++ make python3
WORKDIR /app
COPY ./ /app
RUN yarn install --immutable
CMD ["yarn", "develop"]