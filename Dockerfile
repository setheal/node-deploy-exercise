FROM node:12-alpine
COPY . .
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 8000