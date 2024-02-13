//fetch('https://somthjing.com').then().catch().finally() 

//..promises one 

const promisesOne = new Promise(function (resolve, reject) {
   //Do an async task 
   //DB calls, crytograpy, network 
   setTimeout(function () {
      console.log('Async task is complete ');
   }, 1000)
})
//consume the promises 
promisesOne.then()(function(){
     console.log("Promises consumed ");
})