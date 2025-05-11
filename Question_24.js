// 24. Write a program to accepts three numbers from user and calculate biggest number out of three numbers.

function app(a,b,c)
{
    if(a>b && a>c)
        {
            console.log("A is a Biggest Number : ", a)
        }
    else if(b>a && b>c)
    {
        console.log("B is a Biggest Number : ", b);
    }
    else if(c>a && c>b)
    {
        console.log("C is a Biggest Number : ", c)
    }
    else{
        console.log("All Number is a same :", a,b,c)
    }
}
app(6,6,6)