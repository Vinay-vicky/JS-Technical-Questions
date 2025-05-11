// 10). Print all Prime Numbers 

function app(num)
{
  for(let i=2;i<=num;i++)
  {  
    for( j=2;j<=i;j++)
     {
       if(i%j===0)
       {
        break
        // console.log(i)
       }
     } 
     if(i===j)
        {
            console.log("This is a Prime Number : ", i)
        }
        else{
            console.warn("This is Not a Prime Number  : ", i)
        }
      }  
}
app(10)