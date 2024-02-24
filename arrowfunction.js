(num)=>{
if(num=0){
    return num
}
else{
    console.log("NO num")
}
}
 
const prom=new Promise((resolve,reject)=>{
    if(resolve){
        console.log("request resolved")
        resolve("")
    }
    else{
        console.log("request not find")
        reject(" ")
    }
})
let res=prom
.then((value)=>console.log(value))
.catch((value)=>console.log(value))

let arr=[1,2,3,4,5,6]
sort=arr.filter((num)=>
    {if((num%2)===0)
    {
      console.log(2*num)
      
    }})
    var products = [     { category: "Electronics", price: 1000 },     { category: "Electronics", price: 500 },     { category: "Clothing", price: 300 },     { category: "Clothing", price: 200 },     { category: "Books", price: 50 } ];
    






