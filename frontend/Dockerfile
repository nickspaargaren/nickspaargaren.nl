FROM node:16-alpine
RUN apk add g++ make python3
WORKDIR /app
COPY ./ /app
RUN yarn install
CMD ["yarn", "develop"]