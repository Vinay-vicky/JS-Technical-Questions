 // 6) Write a function to find the factorial of a number.

//  Logical Method 
 function app(num) 
 {
    let res=1;
  for(let i=1;i<=num;i++)
    {
       res=res*i;
    }   
    console.log(res)
 }
 app(5)

 function app(num) 
 {
    if(num===0||num===1)
    {
      return 1;
       }
        else
       {
      return num*app(num-1)
     }
 }
 console.log(app(5)) 