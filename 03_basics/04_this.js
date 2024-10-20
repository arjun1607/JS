const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    // we use this to refer to the current context / scope
    console.log(`${this.username} , welcome to website`);
    console.log(this); /* 
                         {
                            username: 'hitesh',
                            price: 999,
                            welcomeMessage: [Function: welcomeMessage]
                         }*/
  },
};

user.welcomeMessage(); // hitesh , welcome to website
user.username = "arjun";
user.welcomeMessage(); // arjun , welcome to website


console.log("-----------------------------------------------------------------------------------");


console.log(this);   /* {} , this === module.exports which is an empty object for now
  this in NodeJS global scope is the current module.exports object, not the global object. */

module.exports.foo = 5;
console.log(this);   // log { foo:5 }

// We can access the global object in node using the global keyword:
console.log(global)

// In browser the global scope is the global window object.
// console.log(this) in browser => Window object

// Note :- https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs
function chai(){
    console.log(this);  // <ref *1> Object [global] { ... }  => global nodejs object
    
    let username = "arjun"
    console.log(this.username);   // undefined
    // context only work inside objects not inside functions
    // inside functions we cannot access using this
}
chai()
