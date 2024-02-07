// const user = {
//      username: "pawan",
//      price: 999,

//      welcomeMsg: function(){
//        console.log(`${this.username} , welcome to website `);
//   console.log(this);

//      }
// }

// user.welcomeMsg()
// user.username = "same"
// user.welcomeMsg()
//here we stand node runtime so this refer empty 
// console.log(this);



// const chai = function(){
//       let username = "pawan"
//       console.log(this);
// }

// //..Arrow fun...
// const chai = () =>{
//    let username = "pawan"
//    console.log(this);
// }

//chai();

//..pure arrow function...

// const addTwo = (num1, num2) =>{
//    return num1+num2
// }

// console.log(addTwo(3,4));

//..for imlicit return 

// const addTwo = (num1, num2) => num1 + num2
   


// console.log(addTwo(3,4));

//.....IIFE...

(function chai(){
   //named IIFE
     console.log(`DB CONNECTED`);
})();

// (() => {
//     console.log(`DB CONNECTED TWO`);
// })()

((name) => {
       console.log(`DB CONNECTED TWO ${name}`);
    })('keshav')

