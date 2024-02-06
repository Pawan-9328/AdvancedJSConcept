//function
function sayMyName(){
   console.log('K');
   console.log('E');
   console.log('S');
   console.log('H');
   console.log('A');
   console.log('V');

}
//.execution
//sayMyName();

// function addTwoNumbers(number1, number2){
//    console.log(number1+number2);
// }

// addTwoNumbers(3, null);


function addTwoNumbers(number1, number2){
   //let result = number1+number2;
   return number1+number2;
}

const result = addTwoNumbers(3, null)
//console.log("result:", result);


// function loginUserMessage(username){
//     return `${username} just logged in`
// }
//console.log(loginUserMessage('pawan));

//..handle case suppose user can't pass arguments in function. 
function loginUserMessage(username){
   if(username===undefined){
      console.log("Please enter a username");
      return
   }
   return `${username} just logged in`
}

//console.log(loginUserMessage());

//..function with object...

function calculateCartPart(val1, val2, ...num1){
     return num1
}
//console.log(calculateCartPart(200,400,500));

const user = {
    username: "pawan",
    price: 199

}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user);

// handleObject({
//     username: "sem",
//     price: 399
// })

//...with Array...
const myNewArray = [200,400,100,600]

function returnSecondValue(getArrray){
    return getArrray[1]
}

console.log(returnSecondValue(myNewArray));