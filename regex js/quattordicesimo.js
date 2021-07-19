var marked = require('marked')

module.exports = function (str) {
    /*
    str = marked(str)
    str = /@@(.+?)@@/.exec(str)
    return "<blin
    k>"+str[1]+"</blink>"ds
    */
   str = marked(str)
   return str.replace(/@@(.+?)@@/g,'<blink>$1</blink>')
}