
function operation(){
    return null;
}

function repeat(prova, num){
    if(num<=0) return;
    operation()
    return repeat(operation,--num)
}


module.exports = repeat;