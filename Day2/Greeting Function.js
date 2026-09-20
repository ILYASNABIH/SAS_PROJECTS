const prompt = require('prompt-sync')();
let name = prompt("entrer votre nom :")
function greet(name) {
    console.log("Hello, " + name + "!") 
}
greet(name)