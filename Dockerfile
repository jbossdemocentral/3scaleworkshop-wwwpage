FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# copy files needed for the install
COPY ["package.json", "yarn.lock", "./"]

# RUN yarn install
RUN yarn install --frozen-lockfile

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]