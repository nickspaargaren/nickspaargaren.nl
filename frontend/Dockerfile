FROM node:14.18-alpine
RUN apk add g++ make python
WORKDIR /app
COPY ./ /app
RUN yarn install
CMD ["yarn", "develop"]