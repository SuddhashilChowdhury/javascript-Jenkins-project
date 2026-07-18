//block of code to perform a specfic task are called functions

function add(a, b)
{
    let c= a+b
    return c
}
let y=add(2,3)
console.log(y)

//anonymous functions- functions without a name

let c =function(a,b){
    return a+b
}
console.log(c(3,4))
// another way of declaring anonymous functions

let sum_of_numbers=(a,b)=> a+b
console.log(sum_of_numbers(7,8))
