class User{
    constructor(email, password){
        this.email = email;
        console.log("1");
        
        this.password = password   // it will call setter
    }

    // if defined getter, there must be setter and vice versa
    get password(){
        // return this.password   // will lead to infinite loop

        return `${this._password}encrypted`;
    }

    set password(value){
        console.log("2");
        
        // Infinite loop as this.password = value → calls set password(value) → this.password = value → calls set password(value) → and so on.
        // this.password = value   

        this._password = value  
    }
}

const hitesh = new User("arjun@gmail.com", "123")
console.log(hitesh.password)
console.log(hitesh)   // password is private varible so it is not visible, its not part of object context
// User { email: 'arjun@gmail.com', _password: '123' }