//const tinderUser = new Object() 

const tinderUser = {}

tinderUser.id = "123A"
tinderUser.name = "Naman"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//..object inside Object... 
const regularUser = {
    email: "keshav@gmail.com",
    fullname: {
       userfullname: {
          fistname: "keshav",
          lastname: "Gola"
       }
    }
}

//console.log(regularUser.fullname.userfullname.fistname);

//...combine the Object...
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3);

// pass database value 

const user = [
    {
       id:1,
       email: "h@gmail.com"
    },
    {

    },
    {

    },
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 