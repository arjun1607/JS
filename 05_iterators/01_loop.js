// for

let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];   // if we go out of array index, we get undefined not any OutOfBound error
}

// behaviour of break and continue is same as JAVA/CPP

let i = 0
while (i < 10) {
    console.log(i);
    i++;
}

let score = 11;
do {
    console.log(score);
    score++;
} while (score < 10)