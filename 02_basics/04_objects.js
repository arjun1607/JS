// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// it gives an Array format output
console.log(Object.keys(tinderUser));       // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));     // [ '123abc', 'Sammy', false ]
console.log(tinderUser.hasOwnProperty("isLoggedIn"));    // true

// it gives array inside array, all key-value pairs are converted to array 0, 1 indexed
console.log(Object.entries(tinderUser));   // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


console.log("---------------------------------------------------------------------------");


const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname :{
            firstname: "hitesh",
            lastname: "chaudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
/*
 In case of API response, use Optional chaining to avoid TypeError
 regularUser.fullname?.userfullname.firstname => if fullname is null, it will give undefined

 Nullish coalescing operator (??): Can be used in conjunction with optional chaining to provide 
 a default value if a property is null or undefined. 
 ex:- const city = user?.address?.city ?? "Unknown";.
*/

const obj1 = {1: "a", 2: "b"}       // key stored as string "1"
const obj2 = {3: "a", 4: "b"}
const obj3 = {obj1, obj2}
console.log(obj3);       // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2)   // source if obj2, target is obj1
console.log(obj4);       // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1);       // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {8: "a", 9: "b"}
const obj6 = Object.assign({}, obj2, obj5)  // use like this if u dont want to modify the obj2 
// target will be empty object


// Recommended approach using spread operator
const obj7 = {...obj2, ...obj5}
console.log(obj7);       // { '3': 'a', '4': 'b', '8': 'a', '9': 'b' }

 
// When dealing with values coming from DB  => array of objects
const users = [
    {id:1, email: "h@gmail.com"},
    {id:1, email: "h@gmail.com"},
    {id:1, email: "h@gmail.com"},
]
console.log(users[1].email);
