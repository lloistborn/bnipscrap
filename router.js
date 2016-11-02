"use strict"

const ScrapperUtil = require("./utils/scrapper");

module.exports = function(app) {
    app.get("/bni/promo", function(req, res) {
        let scrapper = new ScrapperUtil();

        // res.send(scrapper.scraping);        
    });
}