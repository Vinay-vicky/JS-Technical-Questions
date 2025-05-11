//4) find the largest number in an array?

function app(arr)
{
//    let res= Math.max(...arr)
//    console.log(res)    
let res= arr.sort((a,b)=>a-b);
console.log(res[res.length-1])
}
app([2,3,14,5,4,8,5,1])