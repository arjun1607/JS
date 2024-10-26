// object literal
const user = {
    username: "arjun",
    loginCount: 8,

    // this keyword for telling current context
    getUserDetails: function (){     
        console.log(`Username : ${this.username}`)  
        console.log(this);
        
    }

}
// console.log(user);
console.log(user.getUserDetails());

// Problem :- suppose we have to make user2, then we have to make another object like -
// const user2 = {
//     username: "akash",
//     loginCount: 2,
//     getUserDetails: function () {
//         console.log(`Username : ${this.username}`)
//         console.log(this);
//     }
// }
// to avoid doing this repetitive work, we have constructor function




// function User(username, loginCount, isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn
//     return this
// }

// const userOne = User("hitesh", 12, true)
// const userTwo = User("chaiandcode", 11, false)  // Problem :- it will override the values in this
// console.log(userOne);  // it will print the global object 


const date = new Date()
// new keyword is constructor function, it allow to make multiple instances from single object literal, it creates a new context

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Wlecome ${this.username}`);
        
    }
    return this    // returnin this is not compulsory when making new instance using 'new' keyword
}

const user1 = new User("hitesh", 12, true)
const user2 = new User("chaiandcode", 11, false)
console.log(user1);
console.log(user2.constructor);      // [Function: User]
console.log(user1 instanceof User);  // true
// we can see abstraction and encapsulation in above example


// Notes:- 
// whenever we use new keyword, empty object is created of User object
// this keyword within the User function refers to newly created object.
// User constructor function is called due to new keyword, pack all the arguments and executed
// assigning values to the username, loginCount, and isLoggedIn properties of the object
// all the arguments get injected in this keyword

