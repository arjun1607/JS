function multipleBy5(num) {
    return num * 5
}
multipleBy5.power = 2
console.log(multipleBy5(5));          // 25
console.log(multipleBy5.power);       // 2
console.log(multipleBy5.prototype);   // {}   
// You can add properties and methods to this prototype object to be inherited by instances of the function.


// The prototype property is associated with functions, not directly with objects.
const arr = {}
console.log(arr.prototype);  // undefined
// When you create an array, it inherits properties and methods from the Array.prototype. 
// However, you don't directly access the prototype property to use these methods.




function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice");
person1.greet(); // Output: Hello, my name is Alice
console.log(Person.prototype)   // { greet: [Function (anonymous)] }
console.log(person1.prototype)  // undefined    becoz its object instance





function createUser(username, score) {
    this.username = username
    this.score = score
    let a = 10
}
createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(this.username)
}
const chai = new createUser('chai', 25)
const tea = new createUser('tea', 250)
chai.printMe()  // chai
console.log(chai)  // createUser { username: 'chai', score: 25 }      it does not have 'a'








/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object. Conctructor function 
is reference for that new object. 

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and
 this is bound to the newly created object. If no explicit return value is specified from the constructor, 
 JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return 
a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/