const User = {
    _email: 'h@gmail.com',
    _password: 'abc',

    get email(){
        return this._email;
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User);
console.log(tea.email);  // h@gmail.com
console.log(User);   // { _email: 'h@gmail.com', _password: 'abc', email: [Getter/Setter] }
console.log(tea);    // {}

