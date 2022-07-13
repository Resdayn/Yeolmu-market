# pull the official base image
FROM node:16
# set working directory as /app
WORKDIR /app
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# add the rest of files
COPY . ./
# start app
CMD ["npm", "start"]