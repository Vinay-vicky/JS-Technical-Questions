// *11. Write a program to print given format.
// *
// ***
// *****
// ******
// *******

function app(num)
{
   for(let i=0;i<=num;i++)
    {
        let res=""
        for(let j=0;j<=i;j++)
        {
           res+="*"
        }
        console.log(res)
    }    
}
app(5)