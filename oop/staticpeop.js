class User {
    constructor(username){
       this.username = username
    }

    logMe(){
       console.log(`Username: ${this.username}`);
    }
    //statuc stop  property access 
    static createId(){
       return `123`
    }
}

const keshav = new User("keshav");
//console.log(keshav.createId())

class Teacher extends User {
    constructor(username,  email){
      super(username)
       this.email = email;
    }
}

const iphone = new Teacher("iphone", ".phone@com")
iphone.logMe();
console.log(iphone.createId());
//console.log(iphone);