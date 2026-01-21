# TaskCreator 

TaskCreator es una aplicación web para gestionar tareas de forma simple y organizada.  
Permite a los usuarios registrarse, iniciar sesión y administrar **sus propias tareas**, todo dentro de un entorno seguro.

Cada usuario solo puede ver y modificar sus tareas.

---

## Funcionalidades

- Registro de usuarios
- Inicio y cierre de sesión
- Creación de tareas
- Marcar tareas como completadas
- Eliminación de tareas
- Modo claro / modo oscuro
- Persistencia de sesión con cookies
- Cada usuario tiene sus propias tareas
- Proyecto dockerizado

---

## Tecnologías utilizadas

### Frontend
- React
- Vite
- Context API
- Fetch API
- CSS puro

### Backend
- Node.js
- Express
- Sequelize
- PostgreSQL
- JWT (autenticación)
- Cookies HTTP

### Infraestructura
- Docker
- Docker Compose

---

## Estructura del proyecto

- taskcreator/
- frontend/ # Aplicación React
- backend/ # API REST
- docker-compose.yml
- README.md

## Cómo ejecutar el proyecto

### Requisitos previos

-Tener instalado Docker

-Tener instalado Docker Compose


## Ejecutar con Docker (recomendado)

### Clonar el repositorio:

- git clone https://github.com/alexalvez01/TaskCreator.git

### Entrar al proyecto:

- cd TaskCreator

### Levantar el backend y la database:

- docker-compose up --build

### Levantar el frontend (manualmente):

- cd frontend
- npm run dev

## Accesos

Frontend:
- http://localhost:5173

Backend:
- http://localhost:3000

## Notas

- El backend maneja la autenticación y las tareas asociadas a cada usuario.

- Las sesiones se mantienen mediante cookies HTTP.

- Las tareas se almacenan en una base de datos PostgreSQL.

- El frontend consume la API del backend para todas las operaciones.





