const fs = require("fs");
fs.readFile(process.argv[2], function callback(err, data){
	data = data.toString().split('\n').length -1
	console.log(data);	
	
	
	
});

