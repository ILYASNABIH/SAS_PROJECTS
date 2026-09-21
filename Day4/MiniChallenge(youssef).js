let Numbers = [160,50,40,20,10,5,1]
let counter = 0
for ( let i = 0 ; i < Numbers.length - 1 ; i++ ) {
    if (Numbers[i] % Numbers[i + 1] === 0 ) {
        console.log(Numbers[i] + " est divisible par " + Numbers[ i+1 ] )
    }
    else {
        console.log (Numbers[i] + " n'est pas divisible par " + Numbers[i + 1] )
    }
}