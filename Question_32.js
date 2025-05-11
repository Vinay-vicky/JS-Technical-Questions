// 32.  Write a program to calculate factorial of a given number.

function app(num)
{
    let res = 1;
    for( let i=num; i>=1; i--)
    {
        res = res*i;
    }
    console.log(res)
}
app(0)