class User{
    constructor(email, password){
        this.email = email;
        this.password = password   
    }

    // if defined getter, there must be setter and vice versa
    get password(){
        // return this.password   // will lead to infinite loop

        return `${this._password}encrypted`;
    }

    set password(value){
        // Infinite loop as this.password = value → calls set password(value) → this.password = value → calls set password(value) → and so on.
        // this.password = value   

        this._password = value  
    }
}

const hitesh = new User("arjun@gmail.com", "123")