const http = require("http");

const url = process.argv[2]

http.get(url, function (response){
	let dat ='';
	response.on('data', function (chunck){
		dat = dat+chunck;
	});
	response.on("end", function (){
		dat = dat.toString()
    console.log(dat.length)
    console.log(dat)
	});
	
});