// for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const str = "arjun"
for (const c of str) {
    console.log(c);

}


// Map => contain unique key and order remains the same
const map = new Map()
map.set('IN', "India")
map.set('US', "United states")
map.set('Fr', "France")
console.log(map);

for(const [key, value] of map){     // destructuring of array
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {   //TypeError: myObject is not iterable
}