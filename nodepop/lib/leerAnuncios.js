// Utilizamos la forma Estricta de JS para evitar errores.
"use strict";

// Cargamos las librerias necesarias para trabajar con ficheros.
const fs = require("fs");
const path = require("path");

/**
 * La función se encarga de acceder al fichero y leerlo
 * @param nombreFichero 
 * @param callback 
 */
function leerAnuncios(nombreFichero, callback) {
    // Se realiza la lectura del fichero.
    fs.readFile(nombreFichero, "utf8", (error, listaArticulos) => {
        // Si se produce un error, lo pasamos al callback para su tratamiento.
        if(error){
            callback(error);
            // Finalizamos la ejecución.
            return;
        }
        // Si la lectura del fichero es satisfactoria.
        // Se transforma el contenido del fichero a un objeto JASON.
        const lista = JSON.parse(listaArticulos);
        // Y se envia al callback para su tratamiento.
        callback(null, lista);
    });
}

// Se exporta la función para poder utilizarla.
module.exports = leerAnuncios;