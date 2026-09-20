const prompt = require('prompt-sync') ();
let number = Number(prompt ('type the number : '))
function square(num = number) {
   return num ** 2
}
console.log (square(num = number))