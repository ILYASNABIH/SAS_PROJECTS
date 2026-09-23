const notes = [12, 20, 5, 11, 9, 16]
let count = 0
let max = notes[0] 
let moyen = 0
for ( let i = 0; i < notes.length; i++) {
    if(max < notes[i] ) {
        max = notes[i]
    }
    if (notes[i] < 10) {
        moyen += notes[i]
        count++
    }

}
console.log( "le plus grand nombre est : " + max)
console.log("le moyen des notes inferieur a 10 est "+ moyen / count )