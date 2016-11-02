const express = require("express");
const router = require("./router.js")

let app = express();
app.set("port", (process.env.PORT || 5100));

let routes = router(app);

app.listen(app.get("port"), function () {
    console.log("server listening on port: ", app.get("port"));
});