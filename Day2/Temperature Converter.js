const Prompt = require('prompt-sync')();
let celsius = Number(Prompt("Type in the Temperature in °C : "))
function celsiusToFahrenheit(c = celsius ) { 
    return (c * (9/5) + 32)  
}
console.log(celsiusToFahrenheit(c = celsius ))