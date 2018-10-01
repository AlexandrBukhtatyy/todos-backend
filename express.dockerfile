FROM node:8

WORKDIR /usr/src/app
VOLUME /usr/src/app

COPY package.json ./
COPY cmd.sh /
RUN npm install

# If you are building your code for production
# RUN npm install --only=production

COPY . .

EXPOSE 8080
CMD ["/cmd.sh"]