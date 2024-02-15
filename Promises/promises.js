//fetch('https://somthjing.com').then().catch().finally() 

//..promises one 

const promisesOne = new Promise(function (resolve, reject) {
   //Do an async task 
   //DB calls, crytograpy, network 
   setTimeout(function () {
      console.log('Async task is complete ');
      resolve();
   }, 1000)
})
//consume the promises 
promisesOne.then(function () {
   console.log("Promise consumed ");
})

//both function write in one part 
new Promise(function (resolve, reject) {
   setTimeout(function () {
      console.log("Async task two ");
      resolve()
   }, 1000)
}).then(function () {
   console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
   setTimeout(function () {
      resolve({ username: "Keshav", email: "keshavexample@.com" })
   }, 1000)
})

promiseThree.then(function (user) {
   console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
   setTimeout(function () {
      let error = false;
      if (!error) {
         resolve({ username: 'hitesh', password: "123" })
      }
      else {
         reject('ERROR: Something went wrong')
      }
   }, 1000)

})
//how to avoide using CallBack hell...

//data niklne ki condition m username m store nhii kra skte value ko 
// const username = promiseFour.then((user) => {
//    console.log(user);
//    return user.username;
// })

// console.log(username);

promiseFour.then((user) => {
   console.log(user);
   return user.username;
   //chaining [jo value upper wale .then se rreturn ho ke aayge vhii new chane m ayegi]

}).then((username) => {
   console.log(username);
}).catch(function (error) {
   console.log(error);
}).finally(() => {
   console.log("The promise is either resolve and reject");
})

const promiseFive = new Promise(function (resolve, reject) {
   setTimeout(function () {
      let error = true;
      if (!error) {
         resolve({ username: "Pawan", password: "435365" })
      } else {
         reject('ERROR: Something went wrong')
      }
   }, 1000)
})
//async directly can't handle error problem  so used try catch 

// async function consumePromiseFive() {
//    //await is object so always store in variable
//    try {
//       const response = await promiseFive;
//       console.log(response);
//    }
//    catch (error) {
//       console.log(error);
//    }

// }

// consumePromiseFive();

//using fetch with try catch
// async function getAllUsers() {
//    try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       console.log(response);
//       // json data take time to convert now best practice is used await 
//       const data = await response.json()
//       console.log(data);
//    } catch (error) {
//       console.log("E", error);
//    }

// }

// getAllUsers();
//thenable called
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
     return response.json()
})

.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))
