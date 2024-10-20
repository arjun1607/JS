const myArr = [0, 1, 2, 3, 5]  // can contain a mix of different data types
const myHero = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);


// Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)   // insert at start by shifting all other elements
myArr.shift()   // remove from start
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));    // return -1 if not present

const newArr = myArr.join()
console.log(newArr);         // 0,1,2,3,5,6  => comma seperated value in string
console.log(typeof newArr);


console.log("----------------------------------------------------------------------------------");

// slice, splice - in splice it include the last index and manipulated the original array

console.log("A", myArr);       // A [ 0, 1, 2, 3, 5, 6 ]
const myn1 = myArr.slice(1, 3)
console.log(myn1);             // [ 1, 2 ] 
console.log("B", myArr);       // B [ 0, 1, 2, 3, 5, 6 ]

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);       // C [ 0, 5, 6 ]
console.log(myn2);             // [ 1, 2, 3 ]




