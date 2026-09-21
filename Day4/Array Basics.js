const colours = ["blue","red","green"]
console.log(colours)
if (colours.length == 3) {
    colours.push("yellow")
    console.log(colours)
     if (colours.length == 4){
        colours.shift()
        console.log(colours)
     }
}
