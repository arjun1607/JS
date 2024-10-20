const userEmail = []
if (userEmail) {
    console.log("got user email");   // it will be executed
} else {
    console.log("don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy valyes
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const obj = {}
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}

// below all are true
console.log(false == 0);
console.log(false == '');
console.log(0 == '');


// Nullish Coalescing Operator (??): null, undefined  => it is fallback mechanism
let val1
val1 = 5 ?? 10   // 5
val1 = null ?? 10   // 10
val1 = undefined ?? 15  // 15
val1 = null ?? 10 ?? 20 // 10
val1 = null ?? null ?? 20 // 10


// Ternary operator
// condition ? true : false

const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80");


