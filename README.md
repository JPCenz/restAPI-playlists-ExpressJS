## restApi - Playlist

Api para crear un usuario , crear canciones y playlists.

## Indice:

- [Descripción y contexto](#descripción-y-contexto)
- [Desarrolladores](#desarrolladores)
- [Requisitos](#requisitos)
- [Guía de instalación](#guía-de-instalación)
- [Guía de uso](#guía-de-uso)
- [Guía en Postman](#guía-en-postman)

## Descripción y contexto
---
<p>Este es un proyecto del final de la unidad 7 de Silabuz. Una api para crear canciones y playlist con un usuario.</p>

## Desarrolladores

<p>-Cesar Quesñay</p>
<p>-Jaime Cezano</p>
<p>-Isaac Tacsa</p>

## Requisitos
---
<p>-Tener un editor de codigo.</p>
<p>-Tener instalado NodeJs.</p>
<p>-Postman(para probar la api).</p>
<p>-Tener instaldo Git.</p>

## Guía de instalación

Primero abrimos el editor de codigo, creamos una carpeta y iniciamos git.
    
    git init
    
Luego clonamos el repositorio.

    git clone (link del la repo)
    
Despues de clonar el repositorio iniciamos el nodeJs.

    npm init
    
Con esto ya tendiamos la api. Ahora falta iniciarlo con el siguiente comando.

    npm run dev nodemon
    
Y esto seria todo.

## Guía de uso
---

<p> Primero abrimos Postman y agregamos una pestaña para un request </p>

### Creacion usuario y login

<p> Para iniciar tenemos que crear un usuario en la direccion. </p>

    http://localhost:9001/api/v1/users/

<p> Para crearlo tenemos que enviar un request en metodo post con el siguiente diccionario. </p>

    {
    "name" :"tu nombre de usuario",
    "email":"tu email de usuario",
    "date_born":fecha de nacimiento(dia/mes/año)",
    "password":"tu contraseña"
    }
    
<p> Para logearse un request en metodo post en la direccion. </p>

    http://localhost:9001/api/v1/users/login/
    
<p> Enviando tus datos. </p>

    {
    "email":"tu email de usuario",
    "password":"tu contraseña"
    }

<p> Te devolvera un estado y un "access_token" que necesitaras para crear canciones. </p>

### Creacion de cancion y listarlas

<p> Para crear una cancion tendras que enviar un post en la siguiende direccion</p>
<p> Ademas de agregar tu "access_token" en el header.</p>

    http://localhost:9001/api/v1/songs/
    
<p> Enviando los datos de la cancion como en el siguiente ejemplo. </p>

    {
    "name": "Persiana Americana",
    "artist": "Soda estereo",
    "album": "Signos",
    "year": 1986,
    "genre": "Rock",
    "duration": 184,
    "is_public": true
    }
 
<p> Para ver la lista de cancion en la misma direccion enviar un request con metodo get. </p> 

### Crear playlist y listarla

<p> Para crear una playlist tienes que enviar un Post a la direccion. </p>
    
    http://localhost:9001/api/v1/playlists/

<p> Con el body </p>
    {
  "name": "Nombre de playlist",
  "user_id": "id de tu usuario"
}

<p> Tambien puedes listar las playlist en la misma direccion con el metodo GET.</p>

### Agregar cancion al Playlist

<p> Direccion </p>
    
    http://localhost:9001/api/v1/song-playlist/

<p> Agregandole en el body el id de la cancion y playlist como en el siguiente ejemplo.</p>

    {
    "id_song":"3",
    "id_playlist":"3"
}


## Guía en Postman
---

<p>El siguiente link tiene mas documentacion y detalles de como usar la Api <p>
<link>https://documenter.getpostman.com/view/24549653/2s8ZDa1LeS</link>










    
