const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // push modifies the existing array 
// console.log(marvel_heros);    // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);  // flash


const all_heros = marvel_heros.concat(dc_heros)   // concat returns new array
console.log(all_heros);    // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]    // using spread operator
console.log(all_new_heros);   // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array =  another_array.flat(Infinity);      // we can give depth to flat arrays
console.log(real_another_array);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("hitesh"));
console.log(Array.from("arjun"));      // [ 'a', 'r', 'j', 'u', 'n' ]
console.log(Array.from({name:"arjun"}));     // []  as it is not able to convert it to array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

