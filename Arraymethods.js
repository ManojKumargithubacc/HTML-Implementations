// Array Methods
const arr=Array('Manoj','Kumar','lamp','MERN','Dev','Sat','Aspire')
console.log(arr)
const arr1=Array(5)
const arr2=Array('5')
console.log(arr.length) 
console.log(arr[6])
console.log(arr[8])
console.log(arr1[4])
console.log(arr1.length)
console.log(arr2.length)
console.log(arr.toString())
console.log(arr.join('>'))
console.log(arr.pop())
arr.push('Systems')
console.log(arr)
console.log(arr.shift())
console.log(arr.unshift("Manoj"))//displays the new array length after appending an element to the start
console.log(arr)
arr[0]="Name"//replaces the exsisting 0th index element
console.log(arr)
console.log(arr.concat("Best Place"))
console.log(arr.concat(arr1))
console.log(arr);
console.log("array",arr.copyWithin(2,3,5))//3rd indexed element is copied and replaces the 6th indexed element
const myArr = [[1,2,6],[3,4,6],[5,6,8]];
console.log(myArr.flat())//Converts 2D array to a single dimension array
const array1=Array('I','am','living','in','Chennai')
array1.splice(4,0,'JLM','JLMS')
console.log(array1)
console.log(array1.splice(1,3))
console.log(array1)

//Conditional Statements
// if else
const demo='Manoj' 
const demo1='Kumar'
if(demo==='Manoj' && demo1==='kumar')
{
    console.log("Hi Manoj Kumar.S")

}
else{
    console.log("Who r you?")
}

//elseif
const fruit='Mango'
const fruit1='Orange'
if (fruit==='Mango'){

console.log("It is Mango")
}
else if(fruit1==='Orange')
{
console.log("It is Orange")
}
else{
    console.log("No fruit is available")
}

//Ternary operator
const animal='puppy'
?console.log("Hi puppy")// if true
:console.log("Where is the puppy?")// else

//looping statement
for(const a of arr ){
    console.log(a)
}

//map()
function toUpper(string) {
    return string.toUpperCase();
  }
const b=arr.map(toUpper) //map changes every element in the collections and stores it in another array
console.log(b)

//filter()
function fname(name){
    return name.startsWith('M')
}
const c=arr.filter(fname) //filters the array and stores it in a new one
console.log(c)

//Standard for
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//while an ddo while
let i=0
while(i<arr.length)
{
console.log(arr[i])
i++

}
let a=0
do{
    console.log(arr[a])
    a++
 }
 while(a<arr.length)
 

 //Functions
 function display(){
    console.log("HIIIIII")
 }
 function demo2(name2='Manoj'){
    console.log(`Welcome ${name2}`)
 }

 display();//invoking a function
 demo2();
 demo2('Aspire');

 //function with return
 function display1(name12="Kumar"){
    
    return name12
 }
 aaa=display1();
 console.log(aaa);
 