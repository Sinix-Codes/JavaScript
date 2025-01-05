console.log("Hey its Sinix");
console.log("Map");
let arr = [20,88,19]
console.log(arr);
arr.map((value)=>{
    console.log(value);
})


console.log("Filter");

let arr2 = [20,88,19,5,3,1,9]
let a2 = arr2.filter((a)=>{
    return a<20;
})
console.log(a2);

console.log("Reduce");

let arr3 = [20,30,40,50]
let a3 = arr3.reduce((a,b)=>{
    return a+b
})

console.log(a3)