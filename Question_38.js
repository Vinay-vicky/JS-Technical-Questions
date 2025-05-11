// 38. Write a program to find sum of all array elements.

function app(arr)
{
    let res = 1;
for(let i=0;i<=arr.length-1;i++)
{
    res=res+arr[i]
    console.log(arr[i])
}
console.log(res)
}
app([1,2,3,4,5])