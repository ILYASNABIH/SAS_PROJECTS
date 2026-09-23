const numbers = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]
function Max (){
    let max = numbers[0]
for ( let i=0 ; i < numbers.length ; i++ ) {
    if(max < numbers[i]){
       max = numbers[i] 
    }
}
return max
}
console.log(Max ())