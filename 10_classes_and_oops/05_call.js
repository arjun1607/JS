function setUsername(username){
    this.username = username
    console.log("called")
    console.log(this)
}

function createUser(username, email, password){
    // setUsername(username)    // it is called , inside it 'this' will be global context
    setUsername.call(this, username)   
    // .call is used to hold the reference, it pass the current execution context to other function

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "124")
console.log(chai)   // createUser { email: 'chai@fb.com', password: '124' }     without call
// createUser { username: 'chai', email: 'chai@fb.com', password: '124' }     with call

