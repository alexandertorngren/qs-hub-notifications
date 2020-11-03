FROM node:12-alpine
WORKDIR /notification-backend
COPY . .
RUN npm install --production
CMD ["node", "src/index.js"]