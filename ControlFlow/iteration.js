//..for...

// for(let index = 0; index<10; index++){
//     const element = index
//     console.log(element);
// }

// for(let i = 1; i<=10; i++){
//     console.log(`Outer loop value: ${i}`);
//     for(let j = 1; j<=10; j++){
//        //console.log(`Inner loop value `);
//        console.log(i+'*'+ j+'='+i*j);
//     }
// }
 // ...Array loop...
// let myArray = ["flash", "superman", "number"]
// console.log(myArray.length);
// for(let index =0; index<myArray.length; index++){
//     const element = myArray[index];
//     console.log(element);
// }

//... break and continue....

// for(let index= 1; index<=20; index++){
//     if(index==5){
//       console.log(`Detected 5`);
//           break;
//     }
//     console.log(`Value of i is ${index}`);
// }


// for(let index= 1; index<=20; index++){
//    if(index==5){
//      console.log(`Detected 5`);
//          continue;
//    }
//    console.log(`Value of i is ${index}`);
// }

//....While looping..
// let index = 0;
// while(index<=10){
//      console.log(`Value of index is ${index}`);
//      index+=2;
// }

// let myArray = ['flash', 'batman', 'superman']

// let arr = 0;
// while(arr< myArray.length){
//    console.log(`Value is ${myArray}[arr]`);
//    arr = arr+1;
// }

//..do while...

let score = 1;

do{
    console.log(`Score is ${score}`);
    score++
}while(score>=10);