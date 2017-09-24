"use strict";

// Cargamos mongoose para poder utilizarlo.
const mongoose = require("mongoose");

// Se crea un Esquema de como debe ser la estructura de un anuncio.
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [{
        type: String,
        enum: ["work","lifestyle","motor","mobile"]
    }]
});

// Busca anuncios en la BD en función de uno o mas FILTROS.
anuncioSchema.statics.findWithParameters = function(filter, skip, limit, callback) {
    const query = Anuncio.find(filter);
    query.skip(skip);
    query.limit(limit);

    return query.exec(callback);
}

// Devuelve los TAG'S disponibles que se pueden asignar a un producto.
anuncioSchema.statics.listTags = function(callback) {
    const listTags = Anuncio.schema.path("tags.0").enumValues;
    callback(listTags);
}

// Se crea un Modelo del anuncio que seguira el Esquema definido antes.
const Anuncio = mongoose.model("Anuncio", anuncioSchema);

// Aunque no es necesario, se exporta Anuncio.
module.exports = Anuncio;