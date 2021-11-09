FROM node:14.18-alpine
RUN apk add g++ make python3
WORKDIR /app
COPY ./ /app
RUN yarn install
CMD ["yarn", "develop"]