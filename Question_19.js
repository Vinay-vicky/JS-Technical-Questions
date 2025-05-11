// *19. Write a program to swap two numbers.

function app(num)
{
    console.log(num)
   let a = num%10;
   let b = parseInt(num/10);
   let res = (a*10)+b;
   console.log(res) 
}
app(45)