// automatically JS converts "2" & "01" to number
console.log("2" > 1);   // true
console.log("02" > 1);  // true

console.log("---------------------------------------------------------------");

console.log(null > 0);    // false 
console.log(null == 0);   // false
console.log(null >= 0);   // true
/*
The reason is that an equality check == and comparisions > < >= <= work differently
Comparision convert null to a number, treating it as 0
thats why null >= 0 is true and null > 0 is false
*/

// for undefined it is false in very case becoz it is NaN in number
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

console.log("--------------------------------------------------------------------");

// Strict checking 
console.log("2" === 2);  // false
