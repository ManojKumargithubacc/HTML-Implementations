let a="Manoj";
console.log("Hi "+a);
const b = "I am in ASPIRE";
const c = b.replace("ASPIRE", "ASPIRE SYSTEMS");
console.log(c);
const arr = ["I", "am", "working", "in", "Aspire Systems"];
const  arrstr= arr.join(" ");
console.log(arrstr);

// String methods
const username ="Aspire Systems"
console.log(username.length)
console.log(username.includes('p'))
console.log(username.startsWith('A'))
console.log(username.endsWith('s'))
console.log(username.replace('Aspire','Systems'))
console.log(username.indexOf('S'))
slicing=username.slice(0,7)
console.log(slicing)
const str=username[5]
console.log(str)
const name1 = "Chris";
const greeting = `Hello, ${name1}`;
console.log(greeting); // "Hello, Chris"
console.log(username.toUpperCase())