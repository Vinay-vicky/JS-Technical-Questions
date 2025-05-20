//5) Write a function to remove duplicates from an array.

function app(arr)
{
   let sorted=arr.sort((a,b)=>a-b)
   console.log(... new Set(sorted))    
   let arr1=[]
       for(let i=0;i<=arr.length;i++)
       {
        if(arr[i]!==arr[i+1])
        {
            arr1.push(arr[i])
        }
       }
       console.log(arr1)
}
app([2,5,3,4,8,4,7,9,5,2,1])