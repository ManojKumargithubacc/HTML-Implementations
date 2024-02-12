export default class User{
constructor(name,age){
    this.name=name
    this.age=age
}
}
export function printName(name){
console.log(`Hi I am ${name}`)
}
export function printAge(age){
console.log(`My age is ${age}`)
}

//export default User (only one module can exported default)
//export {printName,printAge}