FROM node:latest

EXPOSE 9001

COPY main/package.json ./

RUN npm i

COPY main ./

# ARG BUILD_TAG=unknown
# LABEL BUILD_TAG=BUILD_TAG

CMD [ "node", "server.js" ]