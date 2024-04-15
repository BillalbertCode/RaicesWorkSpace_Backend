![Raices WorkSpace](https://th.bing.com/th/id/OIG1.glJIctD5DwA61dYaMCDn?pid=ImgGn)

# Raíces - Plataforma WorkSpace (Backend)

Bienvenido/a al backend de Raíces, una plataforma WorkSpace para compartir tus pensamientos y creaciones con la comunidad. Este backend proporciona las API necesarias para registrar usuarios, manejar publicaciones, comentarios y más.

## Mision

Crear una plataforma de espacio de trabajo totalmente intuitiva e interactiva donde puedas crear un proyecto con sus ramas e invitar a otras personas a participar en tu area de trabajo, convirtiendo una tarea tediosa en una tarea muy facil, sencilla y eficaz

## Tecnologias

### Backend:

**Node.js**

**Express.js** (para el manejo de rutas y controladores)

**MongoDB** (como base de datos para almacenar artículos y usuarios)

### Herramientas adicionales:

- Docker (para contenerizar la aplicación)
- JWT (JSON Web Tokens) para autenticación

*Proximo*

- Gravatar (o similar) para mostrar avatares de usuarios basados en sus correos electrónicos
- AWS 

## Características:

### Autenticación de Usuario:

- Registro de usuarios con validación de correo electrónico.
- Inicio de sesión con autenticación basada en tokens (JWT).
- Protección de rutas privadas que requieren inicio de sesión.

### Creación y Edición de Artículos:

- Creación de nuevos artículos con título, contenido en formato Markdown, etiquetas, etc.
- Edición y eliminación de artículos propios.

### Listado de Artículos:

- Mostrar una lista de los artículos más recientes en la página principal.

*(proximo)*
- Paginación para navegar entre múltiples páginas de artículos.

### Contenedores Docker:

- Configuración de Docker para contenerizar la aplicación frontend y backend.
- Facilita la implementación y escalabilidad de la aplicación.

### Perfiles de Usuario:

- Página de perfil para cada usuario con información personalizada y lista de artículos publicados.
- Avatar de usuario basado en Gravatar u otro servicio similar.

### Seguridad y Validaciones:

- Validación de datos en el frontend y backend para garantizar la integridad de la información.
- Protección contra solicitudes maliciosas.

### Búsqueda y Filtros: *(Proximamente)*

- Barra de búsqueda para buscar artículos por título, contenido o etiquetas.
- Filtros por categorías o etiquetas para encontrar artículos relacionados.

### Comentarios: *(Proximamente)*

- Sistema de comentarios en cada artículo para que los usuarios puedan interactuar.
- Posibilidad de responder a comentarios y recibir notificaciones de nuevas respuestas.

### Gestión de Sesiones y Cookies:*(Proximamente)*

- Mantener la sesión del usuario activa utilizando cookies y tokens JWT.
- Cerrar sesión y eliminar cookies al salir.

## Uso

1. Configura tus variables de entorno con .env.template

2. Revisa documentacionAPI.md

### Endpoints Disponibles

- POST /user/register Registrar un nuevo usuario.
- POST /user/login Iniciar sesión y obtener un token JWT.
- *Privado* GET /user/profile: Obtener los datos del usuario autenticado.  
- *Privado* PUT /user/profile: Actualizar los datos del usuario autenticado. 
- *Privado* DELETE /user/profile: Eliminar la cuenta del usuario autenticado. 
- *Publico* GET /user/profile/:id: Obtener los datos de un usuario por su ID.
- *Privado* POST /article: Crear un nuevo artículo. 
- *Privado* DELETE /article/:id: Eliminar un artículo por su ID. 
- *Publico* GET /article/all: Obtener todos los artículos.
- *Publico* GET /article/user/:userId: Obtener los artículos de un usuario por su ID. 