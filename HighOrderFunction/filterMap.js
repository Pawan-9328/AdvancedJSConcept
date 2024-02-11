//forEach can't return the value

// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) =>{
//      // console.log(item);
//       return item;
// })

// console.log(values);

//..use this for return the value...

 //const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums  = myNums.filter((num) => num > 4)
// console.log(newNums);

// In Arrow Function 

// const newNums = myNums.filter((num) =>{
//       return num > 4;
// })

// console.log(newNums);

//...Some work in forEach...

// const newNums = []

// myNums.forEach((num) =>{
//       if(num > 4){
//            newNums.push(num)
//       }
// })

// console.log(newNums);

const books = [
     {title: 'Book One ', genre: 'fiction', publish: 1981,
      edition: 2004}, 
     {title: 'Book Two ', genre: 'Non fiction', publish: 1992,
      edition: 2008}, 
     {title: 'Book Three ', genre: 'fiction', publish: 1999,
      edition: 2007}, 
     {title: 'Book Four ', genre: 'History', publish: 1989,
      edition: 2010}, 
     {title: 'Book Five ', genre: 'Science', publish: 2009,
      edition: 2014}, 
     {title: 'Book Six ', genre: 'Non - fiction', publish:  1987,
      edition: 2010}, 
     {title: 'Book Seven ', genre: 'History', publish: 1986,
      edition: 1996}, 
];

const userBooks = books.filter((bk) => bk.genre === 'History ')

console.log(userBooks);