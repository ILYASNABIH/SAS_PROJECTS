const prompt = require('prompt-sync') ();
let string = prompt ("type in the word: ")
let empty = true
function isEmpty(str = string, ept = empty) {
    for ( let i = 0 ; i < str.length ; i++ ) {
        if ( !(str [i] === " ") || str.length === 0 ) {
            ept = false
        }
    }
    console.log(ept)
}
console.log(isEmpty(str = string, ept = empty))