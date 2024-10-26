function User(email, password){
    this._email = email       // it won't call setter
    this.password = password

    Object.defineProperty(this, 'email', {
     
        set: function(value){
            this._email = value
        },
        get: function () {
            return `${this._email} arjun`
        },

    })
}

const hitesh = new User("arjun@gmail.com", "123")
console.log(hitesh.email)
console.log(hitesh);  // User { _email: 'arjun@gmail.com', password: '123' }
