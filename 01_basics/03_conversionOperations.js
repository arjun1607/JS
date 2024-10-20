let score = "33abc"
console.log(typeof (score));

// suppose u want to perform all operations with number
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);    // NaN

console.log(Number(null));     // 0
console.log(Number(undefined));   // NaN
console.log(Number(true));     // 1
console.log(Number(""));       // 0


console.log("--------------------------------------------------------------------------");


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1 => true; 0 => false
// "" => false
// "hitesh" => true


console.log("-----------------------------------------------------------------------");


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



console.log("----------------------------- OPERATIONS -------------------------------");


let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = "hitesh"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);      // 12
console.log(1 + "2");      // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32
// all the above has type string


// in below examples convertion happening when +
console.log(+true);   // 1
// console.log(true+);    // not allowed

console.log(+"");    // 0   

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let counter = 100;
counter++;
console.log(counter);     // 101 
console.log(++counter);   // 102
console.log(counter++);   // 102
console.log(counter);     // 103












