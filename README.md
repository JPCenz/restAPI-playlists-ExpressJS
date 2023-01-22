## restApi - Playlist

Api para crear un usuario , crear canciones y playlists.

## Indice:

- [Descripción y contexto](#descripción-y-contexto)
- [Requisitos](#requisitos)
- [Guía de instalación](#guía-de-instalación)
- [Guía de uso](#guía-de-uso)

## Descripción y contexto
---
<p>Este es un proyecto del final de la unidad 7 de Silabuz. Una api para crear canciones y playlist con un usuario.</p>


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

<p> Para iniciar tenemos que crear un usuario en la direccion </p>

    http://localhost:9001/api/v1/users/

<p> Para crearlo tenemos que enviar un request en metodo post con el siguiente diccionario </p>


    {
    "name" :"tu nombre de usuario",
    "email":"tu email de usuario",
    "date_born":fecha de nacimiento(dia/mes/año)",
    "password":"tu contraseña"
    }











    
