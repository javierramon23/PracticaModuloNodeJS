"use strict";

const express = require("express");
const router = express.Router();
const Anuncio = require("../../models/Anuncio");

// Peticion GET a /
// Recupera los TAGS disponibles en el modelo Anuncio.
router.get("/", (request, response, next) => {
    Anuncio.listTags((tagList) => {
        if(tagList === undefined) {
            console.log("Error");
            next(error);
            return;
        }
        response.render("tags",{title: "NodePop", tags: tagList});
    });
})

module.exports = router;