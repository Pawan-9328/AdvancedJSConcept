//..for of...

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

const greetings  = "Hello world!"
for(const greet of greetings){
    console.log(`Each care is ${greet}`);
}

//...Maps...

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Ameria")
map.set('Fr', "France")

//console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value);
}
for(const [key, value] of map){
   console.log(key, ':---:@',value );
}
//...on object...
const myobject = {
   'game1': 'NFS',
   'game2': 'Spiderman'

}

for(const [key, value] of myobject){
   console.log(key, ':-', value);
}