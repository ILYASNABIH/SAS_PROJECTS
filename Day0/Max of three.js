let x = 3
let y = 2
let z = 1
if (z > y && z > x) {console.log("the 3rd one is the max")} 
else if (y > z && y > x) {console.log("the 2nd one is the max")}
else if (x > y && x > z) {console.log("the 1st one is the max")} 
else if (x == y && x == z || y == x && y == z || z == x && z == y  ) {console.log("They're all equal") }
else if (x > z && x == y || y == x && y > z ) {console.log ("both the 1st and the 2nd one are the max")} 
else if (x == z && x  > y || z == x && z > y ) {console.log("both the 1st and the 3rd one are the max ")} 
else {console.log ("both the 2nd and the 3rd are the max")}