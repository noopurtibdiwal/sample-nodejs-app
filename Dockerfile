FROM node:18-alpine

# set working directory
WORKDIR /app

# copy package files
COPY package*.json .

# copy application file
COPY server.js ./

#expose port
EXPOSE 3000

#start application
CMD ["npm","start"]