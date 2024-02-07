console.log(1)
console.log(2)
setTimeout(()=>{
    console.log('Callback function is fired')
},2000);
console.log(3)
console.log(4)
console.log(5)
const req = new XMLHttpRequest();
req.open('GET','https://api.publicapis.org/entries');
req.send();


