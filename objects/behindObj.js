//..singleton..

//..Object Literals

//symbol 
const mySym = Symbol("key1");

const JsUser = {
    name: 'Keshav',
    "full name": "keshav Gola",
    [mySym]: "mykesy1", 
    age: 22,
    location: "delhi",
    email: "keshav@123gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Friday"]
}
// JsUser.geeting = function(){
//    console.log("Hello js user ");
// }

// console.log(JsUser.greeting());


//  console.log(JsUser.email);
//  console.log(JsUser["email"]);
//  console.log(JsUser["full name"]);
//  console.log(JsUser[mySym]);

//JsUser.email = "keshav@chatgot.com"
//Object.freeze(JsUser);
//JsUser.email = "keshav@microsoft.com"
//console.log(JsUser);

