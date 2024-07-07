FROM node:20-slim

WORKDIR /usr/src/app

# ARG FRONTEND_B2C_PORT
# ENV FRONTEND_B2C_PORT=$FRONTEND_B2C_PORT

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

# EXPOSE $FRONTEND_B2C_PORT

CMD ["sh", "-c", "npm run dev"]