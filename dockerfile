FROM node:14

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto que utiliza la aplicación
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["npm", "start"]