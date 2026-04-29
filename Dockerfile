# Imagen liviana
FROM node:20-alpine

# Crear app dir
WORKDIR /app

# Copiar solo package primero (cache)
COPY package*.json ./

# Instalar solo prod deps
RUN npm install --omit=dev

# Copiar código
COPY . .

# Puerto
EXPOSE 3000

# Comando
CMD ["node", "src/server.js"]