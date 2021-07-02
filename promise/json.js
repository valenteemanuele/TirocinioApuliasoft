const qhttp = require('q-io/http');

qhttp.read("https://tools.learningcontainer.com/sample-json.json")
.then(function (json){
	console.log(JSON.parse(json));
})
.catch(null, console.log("errore"))
.done()