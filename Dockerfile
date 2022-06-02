FROM node:16.15

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ADD start.sh /
RUN chmod +x /start.sh

CMD ["/start.sh"]