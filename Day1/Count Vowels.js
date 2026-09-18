let str = "bOunjour";
let count = 0
for (let i = 0; i < str.length; i++) { 
if (str[i] === "a" || str[i] === "e" || str[i] === "o" || str[i] === "i" || str[i] === "u" 
|| str[i] === "A" || str[i] === "E" || str[i] === "O" || str[i] === "I" || str[i] === "A")
{count++;
console.log (str[i])
}
}
console.log("The total number of vowels is " + count);