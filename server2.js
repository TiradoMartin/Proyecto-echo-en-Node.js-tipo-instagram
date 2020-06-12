const express = require("express");

const app = express();
app.use(express.static("public"));
//app.use("img/",express.static("img"));
app.get("/", function node2(req, res) {
    res.sendFile("html/index.html",{
        root:__dirname
    }
    
    
    
    
    );
    // res.send("<h1>hola mundo </h1>")

});

app.listen(3000);