//ES6

// class User {
//    //Imp 
//    constructor(username, email, password) {
//       this.username = username;
//       this.email = email;
//       this.password = password
//    }

//    encryptPassword() {
//       return `${this.password} abc`
//    }
//    changeUsername() {
//       return `${this.username.toUpperCase()}`
//    }
// }
// //user 
// const chai = new User("chai", "chai@.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//Behind the scene 

function User(username, email, password ) {
   this.username = username;
   this.email = email;
   this.password = password;

}

User.prototype.encryptPassword = function () {
   return `${this.password} abc`
}

User.prototype.changeUsername = function () {
   return `${this.username.toUppercase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername);

