FROM node:10

ARG port_number
ENV PORT=${port_number}

ARG db_port_number
ENV DB_PORT=${db_port_number}

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${port}
CMD [ "node", "server.js" ]

