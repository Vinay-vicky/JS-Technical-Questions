// 36. Write a program to count total number of even and odd elements in an array.

function app(num)
{
    let even=0;
    let odd =0;

    for(let i=1;i<=num;i++)
    {
        if(i%2==0)
        {
            even++;
        }else{
            odd++;
        }
    }
    console.log("Total Even Number :" , even)
    console.log("Total Odd Number :" , odd)
}
app(5)