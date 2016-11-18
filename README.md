# Web Scrapper

**bnipscrap** repository is a Web Scrapper API using NodeJS as backend.

**scrapper** is using `cheerio`

## Installation
### NodeJS
1. Install NodeJS to your machine `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash`
2. Clone this repo using `git clone`
3. Do `nvm install v6` then `nvm alias default v6`
4. Last, install file package.json by using `npm install`

## Usage
1. Run this project using `node app.js`

## Routes
### Get All Merchant Categories
* **URL**

  /promo/:merchant

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `merchant=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
```json
{
  "categories": [
    {
      "category": "Fashion",
      "url": "https://m.bnizona.com/promo/index/16"
    }
  ]
}
```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "" }`
    
    
### Get All Merchant Promo Per Category
* **URL**

  /promo/:merchant/categories

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `merchant=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
```json
{
  "promoPerCategory": [
      {
        "category": "Miscellaneous",
        "url": "https://m.bnizona.com/promo/index/26",
        "promo": [
        {
          "imageUrl": "https://m.bnizona.com/files/b1a4b4c0bde16e320515337ac97d45f1.jpg",
          "merchantName": "Aksen Belanja ",
          "promoTitle": "Dapatkan Samsung Galaxy J Series untuk 3 Top Spender Aksenbelanja Katalog",
          "validUntil": "valid until 31 December 2016",
          "promoUrl": "https://m.bnizona.com/promo/view/26/1404"
        },
        {
          "imageUrl": "https://m.bnizona.com/files/1d1a6d1582d79d86f51b996e0e4fcff6.jpg",
          "merchantName": "XL",
          "promoTitle": "Miliki Segera Modem XL Go dan XL Home dengan Kartu Kredit BNI",
          "validUntil": "valid until 31 December 2016",
          "promoUrl": "https://m.bnizona.com/promo/view/26/1401"
        }
  }
}
```

 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "" }`
    
