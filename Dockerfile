FROM node:lts-alpine
WORKDIR /app
COPY ./package*.json /app/
RUN npm ci
COPY ./index.js /app/
CMD ["npm", "run", "dev"]
EXPOSE 3099