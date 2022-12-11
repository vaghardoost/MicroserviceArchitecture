FROM node:16
WORKDIR /usr/app
COPY . .
# RUN npm install
ADD node_modules.tar node_modules
CMD [ "npm","start" ]