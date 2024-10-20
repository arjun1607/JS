const score = 400
console.log(score);


const balance = new Number(100);   // it will be an object
console.log(balance);
console.log(balance.toString().length);  // 3
console.log(balance.toFixed(2));      // 100.00

const n1 = 23.8966
console.log(n1.toPrecision(3));   // 23.9
const n2 = 123.8966
console.log(n2.toPrecision(3));   // 124
console.log(n2.toPrecision(2));   // 1.2e+2

const hundreds = 10000000 
console.log(hundreds.toLocaleString('en-IN'));   // 1,00,00,000


console.log("------------------------------ MATHS -----------------------------------");

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4, 2, 8, 9, 1));
console.log(Math.max(4, 2, 8, 9, 1));

console.log(Math.random());    // it gives value between 0 and 1
console.log(Math.floor(Math.random()*10) + 1);

// get random between range [min, max]
const min = 10
const max = 15
console.log(Math.floor(Math.random() * (max-min+1)) + min);



