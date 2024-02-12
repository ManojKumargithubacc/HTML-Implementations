// 'const' preffered over 'let' over 'var', var is accessible even outside the scope
// let and const are block scoped var is function scoped

function loop(){
    for (let i=0;i<5;i++)
    console.log(i)
}
//console.log(i) //cause error let is accessible only in he block
loop();
const pi=3.14
console.log(pi)
//lexical scoping (nested functions)
function outer() {
    let outerVar = 1
    
    function inner() {
        let innerVar = 2
        
        console.log(outerVar, innerVar) // inner function has access to the variables in outer function
    }
    inner()
}
outer() 