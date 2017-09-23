var express = require('express');
var router = express.Router();

const Anuncio = require("../models/Anuncio");

/* GET home page. */
router.get('/', function(request, response, next) {
  // INDEX muestra todos los productos de la BD SIN FILTROS.
  Anuncio.find({}, (error, listaAnuncios) => {
    if(error) {
        console.log("Error al buscar anuncios");
        next(error);
        return;           
    };
    response.render("index", {title: "NodePop", rows: listaAnuncios});
  });
});

module.exports = router;
