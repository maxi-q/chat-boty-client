FROM node:20-slim

WORKDIR /usr/src/app

ENV NEXT_PUBLIC_MODE=$NEXT_PUBLIC_MODE

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# EXPOSE $FRONTEND_B2C_PORT

CMD ["sh", "-c", "npm run start"]