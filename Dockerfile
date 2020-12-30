FROM node:12-alpine

USER node

ARG APP_PATH=APP_PATH

WORKDIR /app

COPY $APP_PATH/app.js .   
COPY $APP_PATH/package.json . 

EXPOSE 3000
CMD [ "npm", "start" ]
