const getfunc=(callback)=>{

const req = new XMLHttpRequest();
req.addEventListener('readystatechange', () => {

    if (req.readyState === 4 && req.status === 200) {//if readystate is 4(done) then get the response as text
        const data=JSON.parse(req.responseText);
        
        callback(undefined,data);
    
    }
    else if(req.readyState===4){
         callback('could not fetch ',undefined);
    }
});
req.open('GET','Json.json');
req.send();};

getfunc((err,data1)=>{
console.log('callbak fired');
if(err){
    console.log(err)
}
else{
    console.log(data1)
}
});
//client has created open() but not yet called ->state 0
//open() has been Called->state 1
//send() has been called and headers and status are available->state 2
//downloads response text holds partial data->state 3
//operation is complete->state 4


//promise method of request->fetch()
/*const firstfetch=fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(firstfetch);
firstfetch.then((response)=>{
    console.log(`response received ${response.status}`)//to get the status of the response
});//when the fetch is complete promise pasess the handler using then handler

console.log("Started request…");*/
