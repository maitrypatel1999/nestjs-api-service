FROM node:20

RUN npm install pm2 -g

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run config:prod
RUN npm run build

ENV NODE_ENV=production

CMD ["pm2-runtime", "pm2-processes.json"]