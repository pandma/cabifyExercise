FROM node:latest

EXPOSE 9001

COPY service/package.json ./

RUN npm i

COPY service ./

# ARG BUILD_TAG=unknown
# LABEL BUILD_TAG=BUILD_TAG

CMD [ "node", "server.js" ]