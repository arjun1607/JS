function sayMyName() {
  console.log("H");
  console.log("i");
  console.log("t");
  console.log("e");
  console.log("s");
  console.log("h");
}

// sayMyName is reference of function
// sayMyName();  // this is execution of function

function addTwoNo(n1, n2) {
  console.log(n1 + n2);
}
addTwoNo()          // NaN 
addTwoNo(1)         // NaN
addTwoNo(3, 4)      // 7
addTwoNo(3, null)   // 3   => type if number

// below all has type string
addTwoNo("1")       // 1undefined 
addTwoNo(3, "a")    // 3a 
addTwoNo("a", null) // anull   

const result = addTwoNo(3, 4)
console.log(result);  // undefined

function addTwoNoReturn(n1, n2) {
  return n1 + n2;
}
const result2 = addTwoNoReturn(3, 4)
console.log(result2);  // 7


function loginUserMessage(username){
  if(username === undefined){   // !username can also be used as in JS empty string "" or undefined are FALSE values
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}
console.log(loginUserMessage("arjun"));
console.log(loginUserMessage(null));   // null just logged in
console.log(loginUserMessage());   // undefined just logged in       BEFORE IF CHECK
// undefined     AFTER IF CHECK  


function loginUserMessageWithDefault(username = "Arjun") {    // default will be used if not passed
  return `${username} just logged in`;
}
console.log(loginUserMessageWithDefault());   // Arjun just logged in
