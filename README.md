API REST con Sequelize, Express, Node.js, bcrypt y MySQL

Este proyecto es una API REST construida con Node.js, Express, Sequelize y MySQL, diseñada para manejar la autenticación de usuarios y gestionar datos de forma eficiente. Utiliza bcrypt para el hashing de contraseñas.
El objetivo de este proyecto es generar un cotizador que vaya cotizando proyectos generados con una impresora 3D.

Características  
CRUD completo para entidades personalizables.  
Autenticación segura con hashing de contraseñas usando bcrypt.  
Base de datos relacional gestionada con Sequelize y MySQL.

Requisitos previos  
Node.js  
MySQL  
npm  

Instalación  
Clona el repositorio: git clone https://github.com/alejandrolee98/TP_TP2.git  
Instalar dependencias: npm install  
Crea un archivo .env en el proyecto siguiendo el .env.example  

Uso  
Inicia el servidor: npm start  
El servidor estará disponible en http://localhost:8000  

Endpoints principales  
Usuario  
GET: /user/ *devuelve todos los usuarios (solo lo pueden ver los admins)  
GET: /user/:id *devuelve usuario especifico por ID  
POST: /user/ *crea un usuario nuevo {nombre, apellido, email, password, direccion, localidad, cp, provincia} si es admin se le debe pasar el RoleId correspondiente  
DELETE: /user/:id *elimina el usuario pasado  
PUT: /user/:id *editar los datos del usuario pasado  
Proyecto  
GET: /proyecto/ *devuelve todos los proyectos 
GET: /proyecto/:id *devuelve proyecto especifico por ID  
GET: /proyecto/user/:userId *devuelve los proyectos del usuario pasado por ID  
POST: /proyecto/ *crea un proyecto nuevo {descripcion, ancho, alto, grosor, tipo, material, cantidadColores, cantidad} toma el ID del token que es pasado por cookie  
DELETE: /proyecto/:id *elimina el proyecto por ID  
PUT: /proyecto/:id *editar los datos del proyecto pasado por ID  


Herramientas y dependencias principales  
Express: Framework para construir la API REST.  
Sequelize: ORM para interactuar con la base de datos MySQL.  
bcrypt: Para hash seguro de contraseñas.  
jsonwebtoken (JWT): Para autenticación basada en tokens.  
