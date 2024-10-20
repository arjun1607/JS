// if 
if (2 == "2") {
    console.log("executed");   // it will be printed, to avoid use === it also check the type    
}

if (2 === "2") {
    console.log("executed");   // will not be executed 
}

if (2 != "2") {
    console.log("executed");    // will not be executed, as it find them equal
}

if (2 !== "2") {  //  !== checks if two values are not equal and also if they are not of the same type
    console.log("executed");    // will be executed, 
}

console.log("------------------------------------------------------------------------------------------");

const score = 200
if(score > 100){
    var power = "fly"
    let power2 = "swim"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);     // User power: fly , becoz var inside if {} has global scope
// console.log(`User power: ${power2}`);    // ReferenceError: power2 is not defined


const balance = 1000
if (balance > 500) console.log("test"),   // using comma scope remains the same
console.log("test2"),
console.log("test3");


