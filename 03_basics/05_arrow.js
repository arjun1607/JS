// const tea = function () {
//     let username = "arjun";
//     console.log(this.username);  
// }

const chai = () => {
    let username = "arjun";
    console.log(this.username);   // undefined
    console.log(this);   // {}  in node environment
}

chai()



let checkThis = {
    normalFunction: function () { console.log(this); },
    arrowFunction: () => console.log(this)
};
  
checkThis.normalFunction(); // { normalFunction: [Function: normalFunction], arrowFunction: [Function: arrowFunction] }
checkThis.arrowFunction();  // {} in node, Window in browser


// const add = (n1, n2) => {
//     return n1 + n2
// }

// when using { } in arrow function, using return keyword is compulsory

// const add = (n1, n2) => n1 + n2
const addTwo = (n1, n2) => (n1 + n2)   // return is not used with ( )
const addObj = (n1, n2) => ({username: "arjun"})
console.log(addTwo(3, 4));


console.log("--------------------------------------------------------------------------------------");

/* Arrow functions have a lexical this which means that the value of this inside the function 
   is the same as the value of this outside the function. 
   They inherit them from their parent lexical scope.
*/

const anObject = {
    aValue: "example value",
    aMethod: function() {
        console.log("aMethod", this);
        const arrow = () => { console.log("arrow", this); }
        arrow();
    },

    bMethod: () => { console.log("bMethod", this); }
}
  
anObject.aMethod();
//  aMethod { aValue: 'example value', aMethod: [Function: aMethod] }
//  arrow { aValue: 'example value', aMethod: [Function: aMethod] }

anObject.bMethod();
// bMethod {}  in node 
// bMethod Window {...}  in browser
  
const copyOfAMethod = anObject.aMethod;
copyOfAMethod();
// aMethod <ref *1> Object [global] {...}
// arrow <ref *1> Object [global] {...}
