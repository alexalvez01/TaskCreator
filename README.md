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

taskcreator/
│
├── frontend/ # Aplicación React
├── backend/ # API REST
├── docker-compose.yml
└── README.md

