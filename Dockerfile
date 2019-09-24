FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8000
CMD [ "node", "server.js" ]