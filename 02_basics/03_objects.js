// singleton - when object made using constructor
// obejct literals - not singleton, multiple instances made

const mySym = Symbol("key1")

const JsUser = {
    name: "arjun",   // by default key are taken as string "name"
    "full name" : "arjun pahadia",
    [mySym]: "mykey1",    // using symbol as key
    age: 18,
    location: "Jaipur",
    email: "arjun@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

// accessing using . not allowed
console.log(JsUser["full name"]);   
console.log(JsUser[mySym]); 

JsUser.email = "arjun@meta.com"

// Object.freeze(JsUser)     // after this changes will not propagate
// JsUser.email = "arjun@amazon.com" 
// console.log(JsUser);      // email will not change

JsUser.greeting = function(){
    console.log("hello js user");
    
}
console.log(JsUser.greeting);  // [Function (anonymous)]   => we get the reference of function, although it is not executed
console.log(JsUser.greeting());  
/*
hello js user
undefined
*/

JsUser.greetingTwo = function(){
    console.log(`hello js user ${this["full name"]}`);
}
console.log(JsUser.greetingTwo()); 
/*
hello js user arjun pahadia
undefined
*/