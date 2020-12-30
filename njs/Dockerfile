FROM node:12-alpine

USER node

WORKDIR /app

COPY app.js .   
COPY package.json . 

EXPOSE 3000
CMD [ "npm", "start" ]
