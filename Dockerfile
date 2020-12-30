FROM node:12-alpine

USER node

ARG APP_FOLDER=APP_FOLDER

WORKDIR /app

COPY $APP_FOLDER/app.js .   
COPY $APP_FOLDER/package.json . 

EXPOSE 3000
CMD [ "npm", "start" ]
