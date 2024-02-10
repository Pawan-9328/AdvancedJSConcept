//..for in loop 

// const myObject = {
//     js: 'javaScript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }

// // for(const key in myObject){
// //     console.log(myObject[key]);
// // }

// // for(const key in myObject){
// //    console.log(`${key} shortcut is for ${myObject[key]}`);
// // }
// const programming = ["js", "rb", "py", "java", "cpp"]

// for(const key in programming){
//     console.log(programming[key]);
//}

//..forEach...

//  const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach(function (item, index, arr) {
//      console.log(item,index,arr); 
// })

//..Arrow function...

// coding.forEach((item)=> {
//      console.log(item); 

// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

const myCoding = [
   {
      languageName: "JavaScript",
      languageFileName: "js",

   },
   {
      languageName: "Java",
      languageFileName: "Java",

   },
   {
      languageName: "C++",
      languageFileName: "Cpp",

   }
]

myCoding.forEach((item) =>{
     console.log(item.languageName);
})
