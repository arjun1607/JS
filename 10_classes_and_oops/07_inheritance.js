class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);    
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addcourse()

const masalaChai = new User("masalaChai")
masalaChai.logMe()
// masalaChai.addcourse()        // error

console.log(chai === Teacher);          // false
console.log(chai instanceof Teacher);   // true
