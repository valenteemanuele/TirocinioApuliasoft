const express = require("express");
const app = express();
const port = process.argv[2];
const fs = require("fs");
app.get("/books", function (req,res){

    const filename = process.argv[3];
    fs.readFile(filename, function(e, data){
        if (e) return res.sendStatus(500);
        try {
            books = JSON.parse(data)

        }
        catch (e){
            res.sendStatus(500)
        }
        res.json(books)

    })


});

app.listen(port);