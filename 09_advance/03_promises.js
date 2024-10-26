async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()  // using await here also becoz .json method also takes time
        console.log(data);
    }
    catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error)
)


// Async Functions:- 
// Always return a Promise.
// Can contain await expressions.

// Await Expressions:-
// Used within async functions.
// Pauses the execution of the async function until the Promise returned by the awaited expression is resolved or rejected.
// If resolved, the value of the resolved Promise is assigned to the await expression.
// If rejected, an error is thrown.

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}

fetchData().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});