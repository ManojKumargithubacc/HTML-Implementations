// Event bubbling from child to grand parent
const gparent=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")
gparent.addEventListener("click",e => {
    console.log("Grand Parent Event")
}); 
//Capture event skips bubbling
parent.addEventListener("click",e => {
    console.log("Parent Event")
},{capture: true});//

child.addEventListener("click",e=>{
    console.log("Child Event")
});
//Creating an object and adding name and value pair(properties and methods)
const firstobj={
    firstname: "Manoj",
    lastname: "Kumar",
    phno: "9944844444",
    function(){
        console.log(`Hi this is ${this.firstname}`)
    },
    Obj:{
        father:"Srinivasan",
        Mother:"Vasantha"
    }

    }
let arr=[]
arr.push(firstobj.firstname)
console.log(arr)

const obj={
    uname: "Manoj",
    lname:"kumar", 
    function(){
        console.log(`Hi this is ${this.uname}`)
    }
}
//Creating a constructor
function naming(name){
    this.name=name;
    this.age='22';
}
const funct= new naming("Manoj")//using funct to call the name
//prototype: setting a prototype to an obj