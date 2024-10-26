function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2
console.log(multipleBy5(5));          // 25
console.log(multipleBy5.power);       // 2
console.log(multipleBy5.prototype);   // {}   
console.log(multipleBy5.prototype.constructor)     //[Function: multipleBy5] { power: 2 }
// When you access the prototype property of a function, you're essentially looking at a plain object. 
// This object, by default, contains a single property: constructor, which points back to the function itself.
// You can add properties and methods to this prototype object to be inherited by instances of the function.

// The prototype property is associated with functions, not directly with objects.
const arr = {}
console.log(arr.prototype);  // undefined
// When you create an array, it inherits properties and methods from the Array.prototype. 
// However, you don't directly access the prototype property to use these methods.








/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and
 this is bound to the newly created object. If no explicit return value is specified from the constructor, 
 JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return 
a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/