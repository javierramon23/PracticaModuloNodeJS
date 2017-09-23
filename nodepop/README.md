# NodePOP:

## Introducción
NodePop es una aplicacion para practicar sobre los contenidos que se han visto en el modulo de NodeJS del BootCamp, en este caso se simula una aplicacion de compra-venta de productos de segunda mano.

## Puesta en marcha:
La puesta en marcha de la aplicación se realiza en **tres** fases, primero debemos, **arrancar** el servidor de BD,
después **inicializar** la BD y finalmente **ejecutar** la aplicación para ponerla en funcionamiento.

### Iniciar el Servidor de BD:
Para iniciar el servidor utilizamos el siguiente comando:
```bin/mongod --dbpath ./data/db --directoryperdb```

### Iniciar la BD:
Inicializar la BD permite borrar las tablas de la BD y cargarlas con los anuncios **base**.
Para inicializar la BD sólo hay que ejecutar el comando:
```npm run installDB```

### Iniciar la aplicación:
Para iniciar la aplicación se debe ejecutar a través de la consola el comando:
```nodemon```

## Como se utiliza NodePop:
Para acceder a la aplicacion:
***http://localhost:3000***

La aplicación permite realizar búsquedas y aplicarle los sigueintes filtros:

1.- Por TAG:
```http://localhost:3000\anunucios?tag="nombre_tag"```

2.- Por tipo de anuncio:
```http://localhost:3000\anunucios?venta="true o false"```

3.- Por rango de precio:
```http://localhost:3000\anunucios?precio="precio"```
En este caso se admiten diversos valores del precio:
    3.1- Precio exacto: ***?precio=500***
    3.2- Precio Menor al enviado: ***?precio=-500***
    3.3- Precio Mayor al enviado: ***?precio=500-***
    3.4- Rango de precio: ***?precio=500-1000***

4.- Por nombre del artículo:
```http://localhost:3000\anunucios?nombre="cualquier_cadena"```

Permite insertar nuevos anuncios:

En este caso, como se trata de un prototipo, para hacer las inserciones se puede utilizar POSTMAN para
simular la peticion POST de inserción.

Tambien permite listar los TAGS existentes:



Para realizar la paginación de los resultados, hasta que no se realice la implementacion completa, podemos utilizar
los parametros ***skip*** y ***limit*** en la URL al solicitar los articulos.

Estos parametros junto con los que definen la búsqueda de articulos pueden combinarse para realizar busquedas mas complestas:
```http://localhost:3000/anuncios?tag=&precio=-500&venta=true&nombre=iP&skip=0&limit=2```

