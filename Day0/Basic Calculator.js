let num1 = 7;
let num2 = 0;
let operator = "*";
switch (operator){
case "+":
console.log(num1 + num2);
break;
case "-":
console.log(num1 - num2);
break;
case "*":
console.log(num1 * num2);
break;
case "/":
if (num2 === 0) {
    console.log("division par 0 n'est pas possible")
}
else {
console.log(num1 / num2);
}
break;
default : 
console.log ("cette operation n'est pas possible");
}
