// *15. Write a program for swapping of two integer variables Without using third variable.

function app(first,second)
{
    console.log(first,second)
   first = first + second; 
   second = first - second;
   first = first - second ;
   console.log(first,second);
}
app(4,5)