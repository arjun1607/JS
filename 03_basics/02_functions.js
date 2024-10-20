function calculateCartPrice(val1, val2, ...num){   // rest operator
    return num
}

console.log(calculateCartPrice(200, 300, 450, 600, 340));    // [ 450, 600, 340 ]


const user = {
    username: "Jim",
    price: 100
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    username: "Sam",
    price: 200
})


const myNewArray = [200, 300, 500, 149]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3]));

