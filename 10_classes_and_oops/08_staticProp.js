class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId());     // TypeError: hitesh.createId is not a function
console.log(User.createId());   // 123


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}
console.log(Teacher.createId());   // 123
