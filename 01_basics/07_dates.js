let myDate = new Date()   // give today's date
console.log(myDate.toString());   // Sat Oct 19 2024 04:26:27 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());   //Sat Oct 19 2024
console.log(myDate.toLocaleString()); // 10/19/2024, 4:26:27 AM
console.log(typeof myDate);    // object

let myCreatedDate = new Date(2023, 0, 23);  // month starts from 0
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023
let d2 = new Date(2023, 0, 23, 5, 3);
let d3 = new Date("2023-01-14");
let d4 = new Date("01-14-2023");
console.log(d4.toDateString());

let myTimeStamp = Date.now();  // return in milliseconds
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));  // to avoid decimals


let newDate = new Date();
console.log(newDate.getMonth() + 1);  // becoz month starts from 0
console.log(newDate.getDay());

// `${newDate.getDate()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));

