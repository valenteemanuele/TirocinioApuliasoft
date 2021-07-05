const express = require("express");
const app = express();
const port = process.argv[2];
app.get("/search", function(req,res){
   const query = req.query;

   res.send(query);

});

app.listen(port);