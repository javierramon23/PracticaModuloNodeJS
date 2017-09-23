"use strict";

// Cargamos mongoose para poder utilizarlo.
const mongoose = require("mongoose");

// Se crea un Esquema de como debe ser la estructura de un anuncio.
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

anuncioSchema.statics.findWithParameters = function(filter, skip, limit, callback) {
    const query = Anuncio.find(filter);
    query.skip(skip);
    query.limit(limit);

    return query.exec(callback);
}

// Se crea un Modelo del anuncio que seguira el Esquema definido antes.
const Anuncio = mongoose.model("Anuncio", anuncioSchema);

// Aunque no es necesario, se exporta Anuncio.
module.exports = Anuncio;