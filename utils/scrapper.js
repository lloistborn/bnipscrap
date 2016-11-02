"use strict"

const config = require("../config.json");

module.exports = class ScrapperUtil {
    scraping() {
        return "hello im scrapping him --> ", config.bni.promopage;
    }
};