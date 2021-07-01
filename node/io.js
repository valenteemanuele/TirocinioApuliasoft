const fs = require("fs");
buffer = fs.readFileSync(process.argv[2]);
buffer = buffer.toString();
buffer = buffer.split('\n').length -1
console.log(buffer)

