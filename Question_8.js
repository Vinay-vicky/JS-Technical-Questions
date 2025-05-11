 // 8) How would you check if a Number is a Armstrong?

function app(num)
{
  let org=num;
  let res = 0;
  
  while (num>0)
  {
    let a = num%10;
     num = parseInt(num/10);
     res=res+(a*a*a);
  }
  console.log(res)
    if(org===res)
    {
      console.log("This number is a Armstrong ")
    }
  else {
    console.log("This number is not Armstrong ")
  }
}
app(153)