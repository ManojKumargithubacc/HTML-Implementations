//default parameters
let para = (uname = "Manoj", lname = "Kumar") => console.log(uname, lname)
para()
para("Mano")

//Rest parameter(using ...)
function add(x, ...y) {
    console.log(y)
    console.log(x * y.length)

}
add(9, 'Manoj', 9)//x=9;y=['Manoj',9]

//spread parameter
function spread(a, b) {

    console.log(a + b);

}

let nums = [4];

spread(9,...nums);
//using rest and spread
let a = [2, 3, 4];

let b = [1, ...a, 5];

console.log(b);