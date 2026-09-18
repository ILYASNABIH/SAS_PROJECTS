let str = "bounjour";
let count = 0
for (let i = 0; i < str.length; i++) { 
if (str[i] === "a" || str[i] === "e" || str[i] === "o" || str[i] === "i" || str[i] === "u")
{count++;
console.log (str[i])
}
}
console.log("The total number of vowels is " + count);