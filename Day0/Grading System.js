let score = -1

if ( score <= 100 && score >=90 ) {
    console.log("A")
} 
else if ( score < 90 && score >= 80)
{
    console.log ("B")
} 
else if ( score < 80 && score >=  70 ) {
    console.log("C")
}
else if (score > 100) {
    console.log("Error, invalid score!")
} 
else if ( score < 0 ){
    console.log("Error, invalid score!")
} 
else if (score<70) {
    console.log("F")
}