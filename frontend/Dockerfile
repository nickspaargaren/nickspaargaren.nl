FROM node:14.15
WORKDIR /app
COPY ["package.json", "yarn.lock", "gatsby-config.js", "./"]
RUN yarn install
COPY . .
CMD ["yarn", "develop"]