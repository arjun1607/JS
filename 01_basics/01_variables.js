/*
Earlier the software (JS engine) needed for running JS was only available in broswer. 
But now we can run JS standalone like other languages using Node.js, Deno.

JavaScript is mainly interpreted, but modern JavaScript engines, like V8 in Google Chrome, use JIT (Just-In-Time) 
compilation to boost performance. They convert JavaScript code into optimized machine code right before it runs
*/


const accountId = 12234    // value is locked it cannot be changed
let accountEmail = "hitesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // it becomes globally scoped, not recommended way of declaring variable
let accountState;  // be default value is undefined

// accountId = 2         // not allowed
accountEmail = "hc@hc.com"
accountPassword = "1312423"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block and functional scope

var has function scope (available throughout the function it's declared in)
let has block scope (available within the block where it's declared, typically curly braces {}
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

