FROM node:12
WORKDIR /app
ADD . /app
RUN npm install
RUN npm run build
EXPOSE 4000
CMD npm start