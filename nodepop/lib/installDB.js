// Utilizamos la forma Estricta de JS para evitar errores.
"use strict";

// Cargamos las librerias necesarias para trabajar con mongoose.
const mongoose = require("mongoose");
// Cargamos el Modelo Agente para poder invocar los metodos de la BD.
const Anuncio = require("../models/Anuncio");
// Cargamos leerFichero para poder utilizar la funcion.
const leerAnuncios = require("./leerAnuncios");
// Creamos una nueva conexion con la BD
const connection = mongoose.connection;
// Conectamos con la BD nodepop.
mongoose.connect("mongodb://localhost/nodepop");
// Guardamos el nombre del fichero que contiene los anuncios.
const ficheroOrigen = "anuncios.json";

/**
 * LeerAnuncios:
 * "Coge" el fichero y lee su contenido, una vez ha finalizado de leerlo,
 * Se produce el borrado del contenido actual de la BD,
 * Una vez finaliza el borrado, se continua insertando en la BD los datos que contenia el fichero,
 * Para terminar, se finaliza la conexión con la BD.
 */
leerAnuncios(ficheroOrigen, (error, listaArticulos) => {
    // Si se produce un error en la lectura del fichero, avisamos por la consola.
    if(error) {
        console.log("Error al leer el fichero de anuncios", error);
        // Finalizamos la ejecución.
        return;
    }
    // Si el fichero se lee correctamente, se avisa por consola.
    console.log("El fichero se ha leido correctamente, ahora se borrara la BD actual...");
    // Borramos los datos actuales de la BD.
    Anuncio.deleteMany({},(error) => {
        // Si se produce un error en el borrado, avisamos por consola.
        if(error){
            console.log("Error al intentar eliminar la información de la BD ", error);
            // Finalizamos la ejecución.
            return;
        }
        // Si la eliminacion ha sido satisfactoria.
        console.log("El contenido de la BD ha sido eliminado, ahora se cargaran los Anuncios");
        // Insertamos los anuncios que contiene el fichero en la BD.
        Anuncio.insertMany(listaArticulos.anuncios, (error, lista) => {
            if(error) {
                // Si se produce un error al insertar los anuncios.
                console.log("Error al intentar insertar la información de la BD ", error);
                // Finalizamos la ejecución.
                return;        
            }
            // Si todo es correcto, se avisa por consola.
            console.log("Los datos se han introducido en la BD.");
            // Se finaliza la conexion con la BD.
            mongoose.disconnect();
        });
    });
});