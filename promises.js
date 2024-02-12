const firstpromise=()=>{
    return new Promise((resolve,reject)=>{
        //resolve("Some data resolved")
        reject("Some err")


    });
};
firstpromise().then((data)=>{
    console.log(data)

}).catch((err)=>{
    console.log(err)
})