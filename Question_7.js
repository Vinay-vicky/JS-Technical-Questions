 //7) How would you check if a Number is a palindrome?

function app(num)
{
    let com=num;
    let res=0;
    while (num>0)
    {
    let a=num%10;
        num=parseInt(num/10);
        res=(res*10)+a;
    }
    if(com===res)
    {
      console.log("This is a Palindrome Number : ",res)
  } else {
      console.log("This is a not palindrome Number: ",res)
    }
}
app(151)