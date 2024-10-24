const myNums = [1, 2, 3]

// we give the initial value of accumulator after comma ,
let mytotal = myNums.reduce(function (acc, currval) {
    console.log(`ac: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(mytotal);

// ac: 0 and currval: 1
// ac: 1 and currval: 2
// ac: 3 and currval: 3
// 6

mytotal = myNums.reduce((acc, currval) => acc + currval, 0)
console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

console.log(shoppingCart.reduce((acc, item) => acc + item.price, 0));
