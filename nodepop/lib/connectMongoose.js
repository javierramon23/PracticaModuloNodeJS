"use strict";

const mongoose = require("mongoose");

const connection = mongoose.connection;

connection.on("error", error => {
    console.log("Se ha producido un error al conectar con la BD, intentelo más tarde.");
    process.exit(1);
});

connection.once("open", () => {
    console.log("Conexión establecida con la base de datos.");
});

mongoose.connect("mongodb://localhost/nodepop");