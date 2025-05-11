// 30. Take any ten numbers from user and print sum and average of positive numbers.

// Use prompt becouse user enter 10 time number.

function app(num)
{
    let sum = 0;
    for( let i=0;i<=num;i++)
    {
      sum = sum + i;
    }
    console.log(sum/10)
    console.log(sum)
}
app(10)