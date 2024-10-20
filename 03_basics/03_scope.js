// everything outside is global scope
var c = 5000;
let z = 300;

if (true) {
  // everything inside this is block scope
  let a = 10;
  let z = 25;
  const b = 20;
  var c = 30;
  d = 40; // it also has global scope
  console.log("INNER :", z); // INNER : 25
}

// console.log(a);      // error not defined
// console.log(b);      // error not defined
console.log(c); // 30   this is the issue with var that it does not have block scope
console.log(d); // 40
console.log(z); // 300

console.log(
  "----------------------------------------------------------------------------------------"
);

function one() {
  const username = "arjun";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website); // error not defined

  two();
}

one(); // arjun

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube";
    console.log(username, website); // hitesh youtube
  }
}

console.log(
  "++++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++"
);

console.log(addOne(5));  // 6
function addOne(num) {
  return num + 1;
}

console.log(addTwo(5))   //  Cannot access 'addTwo' before initialization
// in JS variables can hold anything
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));   // 7



console.log(n1);  // undefined
var n1 = 10;
console.log(n1);  // 10

console.log(n2)   // Cannot access 'n2' before initialization
let n2 = 20

