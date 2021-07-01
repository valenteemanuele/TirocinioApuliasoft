
module.exports = function average(...args){
var sum = 0;
args.forEach((value)=>{sum+=value});
return sum/args.length;

}
