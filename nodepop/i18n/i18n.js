var i18n = require("i18n");

i18n.configure({
    locales: ["en","es"],
    directory: __dirname + "/locales",
    defaultLocale: "en",
    cookie: "lang"
});

module.exports = function(request, response, next) {
    i18n.init(request, response);
    var current_locale = i18n.getLocale();
    return next();
};