// 29.Write a program to calculate sum of digits of a number of three digit number using if-else.

function app(num)
{
    if(num<999)
    {
        let sum=num;
        let res=0;
        while(sum>0)
        {
            let a = sum%10;
            res=res+a;
            sum = parseInt(sum/10);
        }
        console.log(res)
    }
}
app(555)