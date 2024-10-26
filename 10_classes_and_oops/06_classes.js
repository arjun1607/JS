// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    // these are called method inside class, not function
    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai', 'chai@google.com', 123)
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene

function User2(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
const tea = new User("tea", "tea@gmail.com", "221")
console.log(tea.changeUsername());
