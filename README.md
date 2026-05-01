# Adoption API

API REST para la gestión de adopciones de mascotas. Permite crear, listar y consultar adopciones.

## Tecnologías
- Node.js
- Express
- Jest + Supertest
- Docker

## 🚀 Run with Docker

docker pull tuusuario/adoption-api:latest
docker run -p 3000:3000 tuusuario/adoption-api:latest

## 🧪 Run tests

npm install
npm test

## Endpoints

GET /api/adoptions
→ Obtiene todas las adopciones

POST /api/adoptions
→ Crea una adopción

GET /api/adoptions/:id
→ Obtiene una adopción por ID

## 📦 DockerHub

https://hub.docker.com/r/gottich/adoption-api

## 📁 Repo

https://github.com/bnahuel/adoption-api