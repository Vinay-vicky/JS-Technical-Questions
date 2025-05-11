// 33. Write a program to calculate sum of digits of a number.

function app(num)
{
    let res = 0;
    while(num>0)
    {
        let a = num%10;
        res = res + a;
        num = parseInt(num/10);
    }
    console.log(res)
}
app(12)