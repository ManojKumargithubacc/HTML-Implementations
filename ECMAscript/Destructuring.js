//array destructuring
var arr=[1,2,3,4,5,6]
var x,y;
[x,y,...rest]=arr
console.log(x)
console.log(y)
console.log(rest)
//Swapping using deconstruction
var arr1=[2,3,4,5,6]
var [firstnum,secondnum]= arr1
console.log(firstnum);
console.log(secondnum);
[firstnum,secondnum]=[secondnum,firstnum];
console.log(secondnum);
console.log(firstnum);
//Object deconstruction
const obj={
    myname:"Manoj",
    lname:"kumar"
}
const {myname:uname,lname:name1}=obj
console.log(uname)
console.log(name1)
//nated obj deconstruction
let obj2 = {
	name: "GFG",
	add : {
		country: "India",
		state : {
			code : "JS",
			pincode:"820800",
			article:{
			topic : "destructuring"
			}
		}
	}
}

let {name} = obj2;
console.log(name)

let {add:{country:abcd}} = obj2
console.log(abcd)

let {add:{state:{code:cd}}} = obj2
console.log(cd)

let {add:{state:{article:{topic:ef}}}} = obj2
console.log(ef);

//Shorthand notation
const address="Ponnagaram"
const State="TN"
const obj1={
    address,
    State
}
console.log(obj1)

//Default values
var obj3 = { a: 1 }
var list = [ 3 ]
var { a, b = 2 } = obj3
var [ x, y = 4 ] = list
console.log(a)
console.log(b)
console.log(x)
console.log(y)

//Parameter context matching
function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "Mano", 42 ])
g({ name: "Kumar", val:  7 })
h({ name: "Srini", val: 42 })
//failsoft takes only the default values
let array2=[1,2,3]
let [a1=5,b1=6,c=7,d]=array2
console.log(a,b,c,d)