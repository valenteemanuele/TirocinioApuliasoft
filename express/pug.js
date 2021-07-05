const express = require('express');
const app = express();
app.set("view engine","pug");

app.get("/home", function(req,res){
    res.render(process.argv[3], {date: new Date().toDateString()})
});

app.listen(process.argv[2]);