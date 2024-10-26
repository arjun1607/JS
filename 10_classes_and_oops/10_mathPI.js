const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }



// console.log(Math.PI);     // 3.14
// Math.PI = 5
// console.log(Math.PI);     // 3.14

const myObj = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function () {
        console.log("chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

chai.name = 'tea'
console.log(chai.name);


for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);     // name is not iterable so not printed
    }
}