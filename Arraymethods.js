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
console.log(arr.copyWithin(6,3))//3rd indexed element is copied and replaces the 6th indexed element
const myArr = [[1,2,6],[3,4,6],[5,6,8]];
console.log(myArr.flat())//Converts 2D array to a single dimension array
const array1=Array('I','am','living','in','Chennai')
array1.splice(4,0,'JLM','JLMS')
console.log(array1)
console.log(array1.splice(1,3))
console.log(array1)