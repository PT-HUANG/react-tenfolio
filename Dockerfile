FROM node:20
WORKDIR /workspaces/ReactTenfolio
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]