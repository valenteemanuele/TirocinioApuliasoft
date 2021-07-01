let input = process.argv.slice(2);

input = input.map(string => string[0]).reduce((tot,string) => tot+string);

console.log(`[${process.argv.slice(2)}] becomes "${input}"`);
