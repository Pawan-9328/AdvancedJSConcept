// document.getElementById('owl').onclick = function(){
//    alert("owl click")
// }

//..most of used Approach...

// document.getElementById('images').addEventListener('click', function (e) {
//    //alert("clicked inside the ul ")
//    console.log("clicked inside the ul ")
//    //console.log(e);

// }, false)


// document.getElementById('owl').addEventListener('click', function (e) {
//    //alert("owl clicked")
//    console.log("owl clicked");
//    e.stopPropagation();

// },false)

// document.getElementById('google').addEventListener('click', function(e){  
//       e.preventDefault()
//       e.stopPropagation();
//       console.log("google clicked");
// },false)


// document.querySelector('#images').addEventListener('click', function (e) {
//    //console.log(e.target.parentNode);
//    console.log(e.target.tagName);

//    if (e.target.tagName === 'IMG') {
//       console.log(e, target.id);
//       let removeIt = e.target.parentNode
//       removeIt.remove()
//    }

//    //removeIt.parentNode.removeChild(removeIt) 
// })
document.querySelector('#images').addEventListener('click', function (e) {
   console.log(e.target.tagName);

   if (e.target.tagName === 'IMG') {
      console.log(e.target.id);
      let removeIt = e.target.parentNode;
      removeIt.remove();
   }
});