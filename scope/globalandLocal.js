//ex curly brases - scope 
let value = 300;
if (true) {
   let a = 10
   const b = 20
   var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

//..scope level 
function one() {
   const username = "keshav"

   function two() {
      const website = "youtube"
      //console.log(username);

   }
   //console.log(website);
   //two();
}
//one();

if (true) {
   const username = "pawan"
   if (username === 'gola') {
      const website = "youtube"
      //console.log(username + website);
   }
   //console.log(website);
}
//console.log(username);

//.....Intersting..........

function addOne(num) {
   return num + 1
}

addOne(5)

const addTwo = function (num) {
   return num + 2
}

addTwo(5)