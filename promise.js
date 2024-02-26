let accepted=true;
let prom=new Promise((resolve,reject)=>{
    if (accepted){
setTimeout(()=>{resolve("Promise is resolved")
    },1000)
}else{
    reject(new Error("Some went wrong"))

}
})
let prom1=new Promise((resolve,reject)=>{
    if (accepted){
setTimeout(()=>{resolve("Promise is resolve")
    },3000)
}else{
    reject(new Error("Some went wrong"))

}
})
let prom2=new Promise((resolve,reject)=>{
    if (accepted){
setTimeout(()=>{resolve("Promise is resolve")
    },2000)
}else{
    reject(new Error("Some went wrong"))

}
})

let x=[prom,prom1,prom2]
let y = Promise.all(x)

y.then((value)=>{
    console.log(value)
})










