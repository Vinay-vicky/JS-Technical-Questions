// 43. Find 2nd highest number from and 2nd minimum from array of n elements.

function app()
{
    const arr = [1,2,5,3,5,4,4,6]
     let res = [... new Set(arr)].sort((a,b)=>a-b)
     console.log("2nd minimum : ",res[1])
     console.log("2nd highest : ",res[res.length-2])
}
app()