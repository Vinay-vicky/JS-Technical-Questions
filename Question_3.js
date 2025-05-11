// 3) Write a function that returns the Fibonacci sequence up to a given number n.

function app(num){
    
    let num1=0;
    let num2=1;
    for(let i=0;i<=num;i++)
    {
        let sum=num1+num2;
            num1=num2;
            num2=sum;
            console.log(sum)
    }
}
app(5)