const prompt1 = require('prompt-sync') ();
let A = Number(prompt1('type the 1st number : ')) 
const prompt2 = require('prompt-sync') ();
let B = Number(prompt2('type the 2nd number : '))
function add(a = A , b = B) {
    return a + b
    
}
console.log(add(a = A, b = B))