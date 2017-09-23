"use strict";

const express = require("express");
const router = express.Router();
const Anuncio = require("../../models/Anuncio");

// Peticion GET a /
// Recupera el contenido de la coleccion Anuncios.
router.get("/", (request, response, next) => {
    // Guaradremos los parametros que se han enviado en la petición a traves de Query String.
    let nombre = request.query.nombre;
    let venta = request.query.venta;
    let precio = request.query.precio;
    let tags = request.query.tag;
    let skip = parseInt(request.query.skip);
    let limit = parseInt(request.query.limit);

    // Se define un Filtro "vacio" que guardara el filtro que se forme con los parametros de entrada.
    let filter = {};

    // Se comprueba la existencia de los posibles parametros de entrada.
    if(nombre) {
        filter.nombre = new RegExp("^" + request.query.nombre, "i");
    }

    if(venta) {
        filter.venta = venta;
    }

    if(precio) {
        let cadena = precio.split("-");
        if(cadena.length === 1) {
            filter.precio = precio;
        } else if(cadena[0] === "") {
            filter.precio = {"$lte": cadena[1]};
        } else if(cadena[1] === "") {
            filter.precio = {"$gte": cadena[0]};
        } else {
            filter.precio = {"$gte": cadena[0], "$lte": cadena[1]};
            console.log("filter.precio");
        }
    }

    if(tags) {

    }

    Anuncio.findWithParameters(filter, skip, limit).then( listaAnuncios => {
        response.render("index", {title: "NodePop", rows: listaAnuncios});
    }).catch( error => {
        console.log("Error", error);
        next(error);
        return;
    })
})

// Peticion POST a /
// Inserta un nuevo anuncio en la BD.
router.post("/", (request, response, next) => {
    const anuncio = new Anuncio(request.body);
    anuncio.save((error, anuncioGuardado) => {
        if(error){
            console.log("Error al insertar anuncio");
            next(error);
            return;
        }

        response.json({success: true, result: anuncioGuardado});
    });
});

module.exports = router;