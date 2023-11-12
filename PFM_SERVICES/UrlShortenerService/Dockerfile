FROM node:latest AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

RUN npm install -g prisma

RUN npx prisma generate

RUN npx tsc

FROM node:latest

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY --from=build /app/.env .env

COPY ./prisma ./prisma

COPY package*.json ./
RUN npm install 

EXPOSE 3000

CMD ["node", "dist/index.js"]
