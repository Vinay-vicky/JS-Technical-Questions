// 23. Find sum of first , third and fifth digit of 6 digit number.

function app(num)
{
  let first = parseInt(num/100000);
  let third = parseInt(num/1000)%10;
  let fifth = parseInt(num/10)%10;
  console.log(first + third + fifth)
}
app(123456)