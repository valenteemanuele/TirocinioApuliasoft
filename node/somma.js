let riga = process.argv
let somma = 0
for (let i=2;i<riga.length;i++)
{
somma = +riga[i]+somma

}

console.log(somma)
