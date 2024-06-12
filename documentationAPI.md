# Documentation EndPoints and Utilitys
Update: 4/14/2024

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
    "username": "JuanTrampa",
    "email": "Juan@Hack.com",
    "name": "Juan",
    "lastName": "Juanito",
    "password": "HACKK300"
    "birthDate": 22,
    "sex": "masculino",
}

#### Login de Usuario
- Metodo: POST
- URL: */user/login*
- Description: Login de usuario devuelve un JWT
- Respuesta exitosa (200 *Usuario Login* + Token)
- Errores (400 *Contraseña Invalida*), (400 *Alguno de los campos son requeridos : username, email*), (404 *usuario o email invalido*)
- json Post: 
{
    "username": "JuanTrampa",
    // or
    "email": "Juan@Hack.com",
    // Obligatorio
    "password": "HACKK300"
}
- json Get:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWI3OWUwODk1NDg5MGE5ZTk1YWU5OSIsImlhdCI6MTcxMzA3NzE5OCwiZXhwIjoxNzEzMDgwNzk4fQ.eSJMP7tIjUPImWz-R1OeqIbaCjj9x4efLvVGt9GB2Jo"
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
        "_id": "661b79e08954890a9e95ae99",
        "username": "Canserbero",
        "email": "Canserbero@gmail.com",
        "name": "Tyron",
        "lastName": "Jos",
        "password": "$2b$10$Izlghc0MYrCB.avesnKOI.Lrn7fmGyRpxQOkWwveiC.M6BnRL0/4.",
        "birthDate": 21,
        "sex": "Masculino",
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
 "birthDate": "birthDate",
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
    "username": "JuanTrampa",
    "email": "Juan@Hack.com",
    "name": "Juan",
    "lastName": "Juanito",
    "birthDate": 22,
    "sex": "masculino",
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
        "_id": "661408fde21c2cebf2fbd7a5",
        "title": "titulo1",
        "content": "Post de muestra 1",
        "author": "6614078ce21c2cebf2fbd79c",
        "createAt": "2024-04-08T15:10:53.585Z",
        "__v": 0
    },
    {
        "_id": "661409a4e21c2cebf2fbd7a9",
        "content": "Post de muesta 2 ",
        "author": "6614078ce21c2cebf2fbd79c",
        "createAt": "2024-04-08T15:13:40.560Z",
        "__v": 0
    },
    {
        "_id": "661440370d5d01f3492385a7",
        "title": "Legends Never Die",
        "author": "66140837e21c2cebf2fbd7a2",
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
        "_id": "6619df823feee62c254df6f8",
        "title": "BANKAIAIAIAI",
        "content": "hetsugatenshoo",
        "author": "6619dbc73feee62c254df6ea",
        "createAt": "2024-04-13T01:27:30.753Z",
        "__v": 0
    },
    {
        "_id": "661b2d6e2bcfeed9171095a5",
        "title": "pa cuando",
        "content": "Kuchiki",
        "author": "6619dbc73feee62c254df6ea",
        "createAt": "2024-04-14T01:12:14.509Z",
        "__v": 0
    }
]
