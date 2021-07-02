
const promise = new Promise((fulfill,reject) => { setTimeout(()=>fulfill("TIMED OUT!"),300)});

promise.then(console.log);
