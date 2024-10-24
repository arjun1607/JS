const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);    // js shortcut is for javascript
}


const programming = ["js", "rb", "py", "java"]
for (const key in programming) {
    console.log(key);    // keys in array starts from 0
    // 0
    // 1
    // 2
    // 3

    console.log(programming[key]);
}



const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

for (const key in myMap) {
    console.log(key, myMap.get(key));  // no result because we cannot iterate over Map in JS using for in
}
