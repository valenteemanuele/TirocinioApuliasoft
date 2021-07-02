
const promise = new Promise(function (fulfill, reject){
	
	if (Math.random%2 == 0){
		fulfill("pari");
	}else{
		reject("dispari");
	}
	
});



promise.then((message) => {console.log(message)}).catch((message) => console.log(message));