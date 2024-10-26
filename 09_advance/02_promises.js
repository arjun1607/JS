// Promise is an object representing the eventual completion or failure of an asynchronous operation

// parameter is a callback
const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})

// .then connection is with resolve, its parameter is also a callback
promiseOne.then(() => {
    console.log("Promise consumed");
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "arjun", email: "arjun@google.com" })
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "arjun", password: "india" })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username   // it will pass the value to next .then() chain
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(()=>{   // always executed
    console.log("Promise is either resolved or rejected");
})



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "Javascript", password: "123" })
        } else {
            reject("Error: JS went wrong")
        }
    }, 1000);
})
// once we make a new Promise its in callback queue for execution
// it is not like function where we have to call to execute explicitly


// async-await will wait for the async task to complete or give error there only
// issue if we dont handle catch gracefully
async function consumePromiseFive() {
    const response = await promiseFive      // waiting for promise to resolve or reject
    console.log(response);  // if promise resolved, it will print the object
}

// if promise is rejected, we can get error. Need to use try catch block inside async function
consumePromiseFive()

// if we dont use async-await in function, it will first print pending Promise then print hello
// but after using async-await hello is printed first and then response from promise
console.log("hello");



async function consumePromiseFiveWithTryCatch() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFiveWithTryCatch()   












