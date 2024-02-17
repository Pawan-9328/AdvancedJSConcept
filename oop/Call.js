function Setuser(username){
    //complex DB calls 
    this.username = username
}

function createUser(username, email, password){
    Setuser.call(this, username)
    console.log("called");
  
    this.email = email;
    this.password = password;
}

const chai = new craeteUser("chai", "chai.com", "123");
console.log(chai);