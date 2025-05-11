// 34. Write a program to find out reverse of a given number.

function app(num)
{
    let res = 0;

    while(num>0)
    {
        let a = num%10;
        num = parseInt(num/10);
        res = (res * 10) + a;
    }
    console.log(res)
}
app(15)