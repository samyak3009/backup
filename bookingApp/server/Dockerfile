FROM node:14-slim
WORKDIR /server
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3080
CMD ["npm", "start"]