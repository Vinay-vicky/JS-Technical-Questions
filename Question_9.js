// 9) How would you check if a Number is a Even and Odd ?

function app(num)
{
  for(let i=1;i<=num;i++)
    {
        if(i%2==0)
        {
            console.log("This is a Even Number :", i);
        }else
        {
            console.log("This is a Odd Number :", i);
        }
    }    
}
app(10)