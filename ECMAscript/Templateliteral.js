// String Interpolation -> provides spaces btw string by default
let uname="Manoj"
let company="Aspire Systems"
function func1(){
return `Hi I am ${uname} working in ${company}`

}
function func(){
    return "Hi all"
}
console.log(`${func()} Welcome ${func1()}`)
var raw =String.raw`Hi @Manoj /n"`//Raw string method to access raw strings
console.log(raw)
