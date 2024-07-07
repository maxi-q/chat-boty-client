FROM node:14-slim

WORKDIR /usr/src/app

ARG FRONTEND_B2C_PORT
ENV FRONTEND_B2C_PORT=$FRONTEND_B2C_PORT

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE $FRONTEND_B2C_PORT

CMD ["npm", "run", "dev"]