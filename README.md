#  💄💄 API RESTful de Cosméticos 💄💄

Esta API proporciona un conjunto de endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos de productos cosméticos. Utiliza Node.js, Express.js y MySQL para la implementación del servidor y la gestión de la base de datos.

## Tabla de contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Estructura de los datos](#estructura-de-los-datos)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Instalación

1. Clona este repositorio en tu máquina local:
 ```
git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-victoriagz.git
```


2. Instala las dependencias necesarias:
```
cd <nombre-del-repositorio>
npm install
```

3. Configura las variables de entorno creando un archivo .env en la raíz del proyecto y proporcionando los valores adecuados para las variables:
```
DB_USER=usuario
DB_PASSWORD=contraseña
PORT=3002
```
4. Inicia el servidor:
```
npm start
```



## Uso
Una vez que el servidor esté en funcionamiento, puedes acceder a los endpoints definidos en la API para realizar diversas operaciones CRUD sobre la base de datos de productos cosméticos.

## Endpoints
GET /cosmetics: Retorna todos los productos cosméticos almacenados en la base de datos.

GET /cosmetics/:id: Retorna un producto cosmético específico según su ID.

POST /cosmetics: Crea un nuevo producto cosmético.

PUT /cosmetics/:id: Actualiza la información de un producto cosmético existente.

DELETE /cosmetics/:id: Elimina un producto cosmético existente según su ID.


## Estructura de los datos
Cada producto cosmético tiene la siguiente estructura de datos:
```
{
  "id": 1,
  "nombre": "Producto 1",
  "tipo": "Crema facial",
  "marca": "Marca A",
  "descripcion": "Esta es una descripción del producto 1."
}
```


## Contribución
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork del repositorio
Crea una nueva rama (git checkout -b feature/nueva-caracteristica)
Realiza tus cambios y haz commit (git commit -am 'Agrega una nueva característica')
Haz push a la rama (git push origin feature/nueva-caracteristica)
Crea un nuevo Pull Request


## Licencia
Este proyecto está licenciado bajo la Licencia MIT.

