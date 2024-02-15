
const User = {
   username: "keshav",
   loginCount: 8,
   signedIn: true,

   getUserDetails: function () {
      //console.log("Got user details from databases");
      //console.log(`Username: ${this.username}`);
      console.log(this);
   }

}

console.log(User.username);
// console.log(user.getUserDetails());
console.log(this);

function user(username, loginCount, isLoggedIn) {
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn
       
 //method
 this.greeting = function(){
    console.log(`Welcome ${this.username}`);
 }


   return this;
}
// now user two override the value to avoide this using new keyword 

const userOne = new user("keshav", 12, true)
const userTwo = new user("keshavCode", 11, false)
console.log(userOne);

