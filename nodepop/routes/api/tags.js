"use strict";

const express = require("express");
const router = express.Router();
const Anuncio = require("../../models/Anuncio");

// Peticion GET a /
// Recupera los TAGS disponibles en el modelo Anuncio.
router.get("/", (request, response, next) => {
    const tagList = Anuncio.listTags();
    response.render("tags",{title: "NodePop", tags: tagList});   
})

module.exports = router;