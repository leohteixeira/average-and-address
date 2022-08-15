FROM node:14-alpine

USER node
RUN mkdir /home/node/api
RUN chown -R node:node /home/node/api
WORKDIR /home/node/api

COPY --chown=node:node package*.json ./
RUN mkdir -p /home/node/api/logs
RUN npm install --only=prod
ADD --chown=node:node ./dist dist/

ENV PORT=3000

EXPOSE 3000
CMD node dist/main/server.js
