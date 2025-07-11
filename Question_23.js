// 23. Find sum of first , third and fifth digit of 6 digit number.

function app(num)
{
  let first = parseInt(num/100000);
  let third = parseInt(num/1000)%10;
  let fifth = parseInt(num/10)%10;
  console.log(first + third + fifth)
}
app(123456)



// function app(num)
// {
//   let second = parseInt(num / 10000) % 10;   // 2nd digit
//   let fourth = parseInt(num / 100) % 10;     // 4th digit
//   let sixth = parseInt(num) % 10;            // 6th digit

//   console.log(second + fourth + sixth);
// }

// app(123456);
