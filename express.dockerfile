FROM node:8

WORKDIR /usr/src/app
VOLUME /usr/src/app

COPY package.json ./
COPY cmd.sh /

COPY . .

EXPOSE 8080
CMD ["/cmd.sh"]