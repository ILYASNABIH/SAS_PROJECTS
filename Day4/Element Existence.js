const prompt = require('prompt-sync') ();
let info = prompt ('search : ')
const exist = false
const identification = [ "ilyas nabih" , "2005" , "7" , "27" , "casablanca" , "youcode" , "youssoufia" ]
function ID( ui = identification , n = info , e = exist ) {
    for (let i = 0 ; i < ui.length ; i++) {
        if (ui[i] === n ) {
            e = true
            break;
        }
    }
    return e;
}
console.log(ID( ui = identification , n = info , e = exist ))