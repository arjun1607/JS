/*
On basis of how data is stored in memory and access, there are 2 classification -
1. Primitive - they are call by value
   7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

2. Non Primitive / Reference type - Array, Objects, Functions
*/ 

// JavaScript is a dynamically typed language becoz we don't need to explicitly declare the type of variable

const score = 100
const scorevalue = 100.3  // also number nothing like float or decimal in JS
let userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id == anotherId);    // false

const bigNumber = 212452353n


// Non Primitive (Array, Objects, Functions)
const heros = ["shakitman", "naagraj", "doga"]
let myObj = {
    name  : "arjun",
    age : 23,
}

const myFunction = function(){
    console.log("hello world");   
}
console.log(typeof myFunction);    // function, but its called object function
console.log(typeof heros);  // object


console.log("---------------------------------------------------------------------------");

// Stack memory used for Primitive datatype - u get the cope of variable declared
// Heap memoery used for non primitive - u get the reference to original value

let myYoutubename = "arjun"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);




