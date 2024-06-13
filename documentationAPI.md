# Documentation EndPoints and Utilitys
Update:06/13/2024

## User
Usuarios Presentes y registrados

### Methodos HTTP

#### Registrar Usuario
- Metodo: Post
- URL: */user/register*
- Description: Registro de usuario
- Respuesta exitosa (201 *Usuario Registrado*)
- Errores (400 *Usuario o Email Ya registrado*)
- json Post: 
{
    "username": "username",
    "email": "email@email.name",
    "name": "name",
    "lastName": "lastName",
    "password": "password"
    "birthDate": birthDateNumber,
    "sex": "sex",
    "profileIconUrl":"URL"
}

#### Login de Usuario
- Metodo: POST
- URL: */user/login*
- Description: Login de usuario devuelve un JWT
- Respuesta exitosa (200 *Usuario Login* + Token)
- Errores (400 *Contraseña Invalida*), (400 *Alguno de los campos son requeridos : username, email*), (404 *usuario o email invalido*)
- json Post: 
{
    "username": "username",
    // or
    "email": "email@email.com",
    // Obligatorio
    "password": "password"
}
- json Get:
{
    "token": "token"
}


#### Obtener Usuario **Privado** 
**Autenticación**: Se requiere un token de autenticación JWT en el encabezado `Authorization`.
  - Formato del encabezado: `Authorization: Bearer {token}`
- Metodo: GET
- URL: */user/profile*
- Description: Pide los datos del Usuario autenticado con JWT
- Respuesta exitosa: (200 *OK*)
- Errores: (404 *Not found*)
- json Get: 
{
        "_id": "_id",
        "username": "username",
        "email": "email@email.com",
        "name": "name",
        "lastName": "lastName",
        "password": "password encript",
        "birthDate": birthDateNumber,
        "sex": "sex",
        "createAt": "2024-04-14T06:38:24.426Z",
        "__v": 0
}
#### Modificacion de los datos del usuario **Privado**
**Autenticación**: Se requiere un token de autenticación JWT en el encabezado `Authorization`.
  - Formato del encabezado: `Authorization: Bearer {token}`
- Metodo: PUT
- URL: */user/profile*
- Description: Cambia los datos del usuario inpuesto (Puede cambiar uno o varios datos)
- Respuesta exitosa: (200 *Usuario actualizado exitosamente*)
- Errores: (400 *Alguno de los campos debe ser rellenado*)
- json Post:
*Posibles Propiedades* 
{
"email": "email",
 "name": "name",
 "lastName": "lastName",
 "birthDate": birthDateNumber,
 "sex": "sex"
} 

#### Eliminacion de Usuario **Privado**
**Autenticación**: Se requiere un token de autenticación JWT en el encabezado `Authorization`.
  - Formato del encabezado: `Authorization: Bearer {token}`
- Metodo: DELETE
- URL: */user/profile*
- Description: Borra el usuario
- Respuesta exitosa: (200 *Usuario Eliminado*)
- Errores: (400 *Alguno de los campos debe ser rellenado*), (404 *Usuario no encontrado*)

#### Obtener Cualquier Usuario **Publico**
- Metodo: GET
- URL: */user/profile/:id*
- Description: Pide un usuario segun su id
- Respuesta exitosa (200 *OK*)
- Errores (404 *Not found*), (400 *Formato de ID No Valido*)
- json: 
{
    "username": "username",
    "email": "email@email.com",
    "name": "name",
    "lastName": "lastName",
    "birthDate": birthDateNumber,
    "sex": "sex",
    "createAt": "2024-04-05T01:24:36.394Z",
    "__v": 0
}


## Articles
Articulos creados por los usuarios

### Methodos HTTP

#### Creacion de articulo **Privado**
**Autenticación**: Se requiere un token de autenticación JWT en el encabezado `Authorization`.
  - Formato del encabezado: `Authorization: Bearer {token}`
- Metodo: POST
- URL: */article/*
- Description: Crea un articulo con title, content, imagenURL, videoURL o audioURL. El author se obtiene del token
- Respuesta exitosa (201 *Articulo Creado*)
- Errores (400 *Alguno de los campos debe ser rellenado*),(404 *No se pudo encontrar el ID del autor*)
- json Post: 
{
    "title":"title",
    "content":"content", 
    "imagenURL":"imagenURL",
    "videoURL":"videoURL"
    "audioURL":"audioURL"
}

#### Eliminacion de articulo **Privado**
**Autenticación**: Se requiere un token de autenticación JWT en el encabezado `Authorization`.
  - Formato del encabezado: `Authorization: Bearer {token}`
- Metodo: DELETE
- URL: */article/:id*
- Description: Elimina un articulo segun su id, Si tiene los permisos requeridos
- Respuesta exitosa (200 *Articulo Eliminado*)
- Errores (401 *No tienes los permisos Necesarios*),(404 *Articulo no encontrado*)

#### Obtener todos los articulos **Publico**
- Metodo: GET *tiene paginacion*
- URL: */article/all*
- Description: Obtiene todos los articulos de todos los usuarios
- Respuesta exitosa (200 *Ok*)
- Errores (404 *Articles not Found*)
- json Get:
[
    {
        "_id": "_id",
        "title": "titulo1",
        "content": "Post de muestra 1",
        "author": "authorId",
        "createAt": "2024-04-08T15:10:53.585Z",
        "__v": 0
    },
    {
        "_id": "_id",
        "content": "Post de muesta 2 ",
        "author": "authorId",
        "createAt": "2024-04-08T15:13:40.560Z",
        "__v": 0
    },
    {
        "_id": "_id",
        "title": "Legends Never Die",
        "author": "authorId",
        "createAt": "2024-04-08T19:06:32.019Z",
        "__v": 0
    }
]

#### Obtener Articulos de un usuario **Publico**
- Metodo: GET *tiene paginacion*
- URL: */article/user/:userId*
- Description: Obtiene todos los articulos de un solo usuario 
- Respuesta exitosa (200 *Ok*)
- Errores (404 *Articles not Found*)
- json Get:
[
    {
        "_id": "_id",
        "title": "X title",
        "content": "content",
        "author": "authorId",
        "createAt": "2024-04-13T01:27:30.753Z",
        "__v": 0
    },
    {
        "_id": "_id",
        "title": "X title",
        "content": "X content",
        "author": "author _id",
        "createAt": "2024-04-14T01:12:14.509Z",
        "__v": 0
    }
]
