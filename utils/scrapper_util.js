"use strict"

const rp = require("request-promise");
const cheerio = require("cheerio");

module.exports = class ScrapperUtil {
    getCategories(url) {
        let categories = [];
        let options = {
            uri: url,
            transform: function(body) {
                return cheerio.load(body);
            }
        };

        return rp(options).then(function ($) {
            $(".menu li").each(function() {
                let link = $("a", this);
                let href = link.attr("href");
                let title = link.text();
                
                categories.push({"category": title, "url": href});
            });
            return categories;
        });
    }

    getPromoPerCategories(url) {
        let promoPerCategory = [];
        let options = {
            uri: url,
            transform: function(body) {
                return cheerio.load(body);
            }
        }

        return rp(options).then(function ($) {
            $("ul[class=list2]").children("li").each(function (i, elem) {
                let link = $("a", this);
                let imageUrl = $(this).children("a").children("img").attr("src"),
                    merchantName = $(this).children("a").children("span").eq(0).text(),
                    promoTitle = $(this).children("a").children("span").eq(1).text(),
                    validUntil = $(this).children("a").children("span").eq(2).text(),
                    promoUrl = link.attr("href");;

                promoPerCategory.push({
                    imageUrl: imageUrl,
                    merchantName: merchantName,
                    promoTitle: promoTitle,
                    validUntil: validUntil,
                    promoUrl: promoUrl
                });
            });

            return promoPerCategory;
        });
    }
};