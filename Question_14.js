// *14. Write a program for swapping of two integer variables using third variable.

function app(a,b)
{
   let first = a;
   let second = b;
   let temp=a;
    console.log(first,second)
   first = b;
   second = temp;
    console.log(first,second)
}
app(4,5)