FROM node:20-slim

WORKDIR /usr/src/app

ARG NEXT_PUBLIC_MODE
ENV NEXT_PUBLIC_MODE=$NEXT_PUBLIC_MODE

ARG WEBMASTER_INDEX_KEY
ENV WEBMASTER_INDEX_KEY=$WEBMASTER_INDEX_KEY

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run start"]