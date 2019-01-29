FROM node:8
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 7001
CMD [ "npm", "start" ]
