const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map will automatically return values
let newNums = myNumers.map((item) => item + 10)  // will add 10 to all values
console.log(newNums);

newNums = myNumers.map((item) => { item + 10 })  //[ undefined, undefined,..........]  becoz not used return

// chaining - values from first chain will be passed to next
newNums = myNumers.map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
console.log(newNums);
    