let str = "Zakaria"
function pourcentage (str) {
    let count = 0
    for (let i = 0 ; i <= str.length -1 ; i++ ) {
        if (str[i] === "a" || str[i] === "i" || str [i] ==="e" || str[i] === "u"
 || str[i] === "o" || str[i] === "A" || str[i] === "I" || str[i] === "E" || str[i] === "U" || str[i] === "O" ) { 
    count = count + 1 }
    
 } 
return (count * 100) / str.length + " %"

}

console.log(pourcentage (str))