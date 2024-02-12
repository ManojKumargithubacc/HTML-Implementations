//String searching
console.log("Manoj".startsWith("ano", 1) )
console.log("hello".endsWith("o"))  
console.log("hello".includes("ell") )      
console.log("hello".includes("ell", 1))
console.log("hello".includes("ell", 2))   

//Array finding
arr=[1,2,3,4,5,6,7]
console.log(arr.find(x=>x>3))
console.log(arr.findIndex(x=>x===6))

//String repeat
console.log("mano".repeat(3))

//Number sign determination
console.log(Math.sign(9))   
console.log(Math.sign(0))   
console.log(Math.sign(-0))  
console.log(Math.sign(-9))  
console.log(Math.sign(NaN))

//Number truncation
console.log(Math.trunc(92.767)) 
console.log(Math.trunc( 0.17)) 
console.log(Math.trunc(-0.1))

//Number comparison
console.log(0.15 + 0.15 === 0.3)
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON)

//Number safety
console.log(Number.isSafeInteger(78))
console.log(Number.isSafeInteger(9009199254740992))

//Number checking
console.log(Number.isNaN(42) )
console.log(Number.isNaN(NaN))
console.log(Number.isFinite(Infinity) )
console.log(Number.isFinite(-Infinity))
console.log(Number.isFinite(NaN) )
console.log(Number.isFinite(123) )