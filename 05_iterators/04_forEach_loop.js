const coding = ["js", "ruby", "java"]

// forEach loop which is inbuilt of array

// coding.forEach(function func() {})       // it needs a callback function
// callback functions dont have a name so remove it
// parameter is each array item
coding.forEach(function (item) {
    console.log(item);
})

coding.forEach((item) => {
    console.log(item);
})

coding.forEach(printMe)
function printMe(item) {
    console.log(item);
}

coding.forEach((item) => {
    console.log(item);
})

coding.forEach(printMe)
function printMe(item) {
    console.log(item);
};

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
