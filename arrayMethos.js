var products = [     { category: "Electronics", price: 1000 },     { category: "Electronics", price: 500 },     { category: "Clothing", price: 300 },     { category: "Clothing", price: 200 },     { category: "Books", price: 50 } ];
console.log(products[0].category)
let product1={
    category: "Electrical", price: 5000
}
//To add product1 at the first=> unshift if (item.category==="Clothing")
products.unshift(product1)
console.log(products)
//To add product1 at the last=>push
products.push(product1)
console.log(products)
//To add product1 inbetween on the second index, 0 indicates no.of items to be removed=> splice
products.splice(2,0,product1)
console.log(products)
//looping through an array
//Returns the first item that matches=> find
let finding= products.find((finding)=>finding.category==="Electronics"&& finding.price===500)
console.log(finding)
//Returns all the items that matches the condn=> filter(also can add an new obj inside it)
products.filter(filtering=>{
    if (filtering.category==="Clothing")
    {
        console.log(filtering.price)
    
    }
})
//Returns a new array which satisfies the codn
let mapping=products.map(mapping=>{
    if (mapping.category==="Clothing")
    {
        return(mapping.price)
    }
})
console.log(mapping)
//Some products satisfies the given codn or not=> some similar to includes
//Every products satisfies the codn=> every
products.some(is=>is.price===500)
products.every(is=>is.price===500)


//Using Reduce()
let arr=[3,9,8,10,9,5]
let reducing=arr.reduce((acc,item)=>acc+item,0)
console.log(reducing)
let Total=products.reduce((acc,item)=>item.category==="Clothing"?acc+item.price:acc,0)
console.log(Total)









