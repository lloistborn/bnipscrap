"use strict"

const ScrapperUtil = require("./utils/scrapper_util");
const site = require("./site.json");

module.exports = function(app) {
    
    app.get("/promo/:merchant", function(request, result, next) {
        let scrapper = new ScrapperUtil();
        let merchant = request.params.merchant;
        let promoUrl = site[merchant].promopage;
        
        let categories = scrapper.getCategories(promoUrl);
    
        categories.then(function (val) {
            result.send({ "categories": val });
        })
        .catch(function (error) {
            result.status(404).json(error);
        });
    });

    app.get("/promo/:merchant/categories", function(request, result, next) {
        let scrapper = new ScrapperUtil();
        let merchant = request.params.merchant;
        let promoUrl = site[merchant].promopage; 

        let categories = scrapper.getCategories(promoUrl);

        categories.then(function (val) {
            let promoPerCategory = [],
                promoPerCategoryPromises = [];
            for (let i = 0, len = val.length; i < len; i++) {
                let json = {
                    category: val[i].category,
                    url: val[i].url,
                    promo: []
                }

                var promise = scrapper.getPromoPerCategories(val[i].url)
                .then(function (allPromo) {
                    for (let j = 0, lenResult = allPromo.length; j < lenResult; j++) {
                        json.promo.push({
                            imageUrl: allPromo[j].imageUrl,
                            merchantName: allPromo[j].merchantName,
                            promoTitle: allPromo[j].promoTitle,
                            validUntil: allPromo[j].validUntil,
                            promoUrl: allPromo[j].promoUrl
                        });

                        console.log(json.promo[j]);
                    }
                    promoPerCategory.push(json);
                });
                promoPerCategoryPromises.push(promise);
            }
            Promise.all(promoPerCategoryPromises).then(function() {
                result.send({ "promoPerCategory": promoPerCategory });
            });
        })
        .catch(function (error) {
            result.status(404).json(error);
        });

    });
}