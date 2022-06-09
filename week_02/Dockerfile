FROM node:latest
ADD ./budgetService /app
ADD ./messageService /app
WORKDIR /app
RUN npm install

CMD [ "node", "index.js"]
