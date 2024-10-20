const name  = "arjun"
const repoCount = 50
// console.log(name + repoCount + " Value");   Not recommended syntax to concatinate string

// use string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("arjun-pahadia-com")
console.log(typeof gameName);   // object
console.log(typeof name);       // string 

console.log(gameName);  // [String: 'arjun']
// here string is object having key-value of [index, letter]


console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());   // it will not change the original value
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));
console.log(gameName.split('-'));


const newString = gameName.substring(0, 4);   // u can't give -ve values, it wont obejct if we try
console.log(newString);

const anotherString = gameName.slice(-5, -2);  // slice can take -ve values, Last char has -1, 
console.log(anotherString);

const str1 = "   hitesh   "
console.log(str1.trim());


const url = "https://arjun.com/arjun%20pahadia"
console.log(url.replace('%20', '-'));
console.log(url.includes('arjun'));
