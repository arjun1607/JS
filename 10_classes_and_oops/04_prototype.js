// let myName = "hitesh     "
// let myChannel = "chai  "
// console.log(myName.trueLength())


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
}

heroPower.hitesh()    // hitesh is present in all objects
myHeros.hitesh()      // hitesh is present in all objects

Array.prototype.heyHitesh = function () {
    console.log(`Hitesh say hello`);
}

// heroPower.heyHitesh()    // TypeError: heroPower.heyHitesh is not a function



// Inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makevideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)   // TS can access all properties of Teacher


let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotherUsername.trueLength()
// ChaiAurCode    
// True length is: 11

"arjun  ".trueLength()
// arjun  
// True length is: 5