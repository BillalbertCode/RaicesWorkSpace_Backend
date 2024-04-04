# NoteBook
Una plataforma de blog donde los usuarios puedan escribir, publicar y compartir sus artículos con la comunidad. Los usuarios podrán registrarse, iniciar sesión, crear, editar y eliminar sus publicaciones, así como también interactuar mediante comentarios.

## Tecnologias
### Frontend:

JavaScript

React (Hooks, Context API)

Bootstrap (o cualquier otro framework CSS de tu elección)

### Backend:

Node.js

Express.js (para el manejo de rutas y controladores)

MongoDB (como base de datos para almacenar artículos y usuarios)

### Herramientas adicionales:

- Docker (para contenerizar la aplicación)
- JWT (JSON Web Tokens) para autenticación
- Axios (para realizar solicitudes HTTP desde el frontend al backend)
- Editor de Markdown (por ejemplo, react-markdown) para escribir artículos en formato Markdown
- Gravatar (o similar) para mostrar avatares de usuarios basados en sus correos electrónicos

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
-Paginación para navegar entre múltiples páginas de artículos.

### Búsqueda y Filtros:

- Barra de búsqueda para buscar artículos por título, contenido o etiquetas.
- Filtros por categorías o etiquetas para encontrar artículos relacionados.

### Comentarios:

- Sistema de comentarios en cada artículo para que los usuarios puedan interactuar.
- Posibilidad de responder a comentarios y recibir notificaciones de nuevas respuestas.

### Perfiles de Usuario:

- Página de perfil para cada usuario con información personalizada y lista de artículos publicados.
- Avatar de usuario basado en Gravatar u otro servicio similar.

### Diseño Responsivo y Atractivo:

- Diseño moderno y receptivo utilizando Bootstrap u otro framework CSS.
- Interfaz intuitiva para leer, comentar y escribir artículos.

### Markdown para Formateo de Texto:

- Permitir a los usuarios escribir artículos utilizando Markdown para un formateo fácil y flexible.
- Mostrar el contenido de los artículos correctamente formateado en la interfaz de usuario.

### Gestión de Sesiones y Cookies:

- Mantener la sesión del usuario activa utilizando cookies y tokens JWT.
- Cerrar sesión y eliminar cookies al salir.

### Seguridad y Validaciones:

- Validación de datos en el frontend y backend para garantizar la integridad de la información.
- Protección contra solicitudes maliciosas.

### Contenedores Docker:

- Configuración de Docker para contenerizar la aplicación frontend y backend.
- Facilita la implementación y escalabilidad de la aplicación.