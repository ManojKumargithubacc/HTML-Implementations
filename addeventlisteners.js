// Event bubbling from child to grand parent
const gparent=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")
gparent.addEventListener("click",e => {
    console.log("Grand Parent Event")
}); //Capture event skips bubbling
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
    Obj:{
        father:"Srinivasan",
        Mother:"Vasantha"
    }

    }

const obj={
    uname: "Manoj",
    lname:"kumar", 
}
let arr=obj.lname;