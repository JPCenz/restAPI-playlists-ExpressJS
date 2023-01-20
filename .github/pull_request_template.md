# [Proyecto Unidad 7](https://github.com/JPCenz/restAPI-playlists-ExpressJS) - [Trello](https://trello.com/b/gSwQUaSf/project-unit-7-silabuz)

## Description

Creación de usuarios con password hasheado y login de usuario mediante en método POST, la creación de canciones seran privadas para los usuarios autenticados y usarán el método POST, para la lectura de las canciones incluyendo lectura por ID serán mediante el método GET, finalmente la creación de playlist con función de tabla intermedia entre la tabla de usuarios y de canciones, la creación de canciones se realizará mediante en método POST.


---
## Type of change

Please delete options that are not relevant.

- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

---
## How Has This Been Tested?

- Ruta para login de usurario: (http://localhost:9001/api/v1/users/login)

```ts
{
    "email": "email@gmail.com",
    "password": "password"
}
```

- Creación de usuarios en la ruta : (http://localhost:9001/api/v1/users)

```ts
{
    "email": "email@gmail.com",
    "password":"password",
    "name":"namw",
    "date_born": "12/12/2000"
}
```

- Creación de Canciones en la ruta: (http://localhost:9001/api/v1/songs)

```ts
{
    "id": 1,
    "name": "Canción 1",
    "artist": "Artista 1",
    "album": "Album 1",
    "year": 2000,
    "gender": "Rock",
    "duration": 120
}
```

- Creación de Playlist en la ruta: (http://localhost:9001/api/v1/playlist)

```ts
{
  "id": 1,
  "name": "Playlist 1",
  "user_id": 1,
  "songs": [
    {
      "id": 1,
      "name": "Canción 1",
      "artist": "Artista 1",
      "album": "Album 1",
      "year": 2020,
      "genre": "Rock",
      "duration": 120
    }
  ]
}
```
