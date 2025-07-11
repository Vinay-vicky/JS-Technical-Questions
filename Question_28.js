//28. Write a program to find maximum between three numbers using if-else and ternary operator.


function app(a, b, c) {
    let max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
    console.log("Maximum Number is:", max);
}
app(5, 7, 9);






// function app(a,b,c)
// {
//     if(a>b && a>c)
//     {
//         console.log(" A is a Maximum Number : ", a)
//     }
//     else if(b>a && b>c)
//     {
//         console.log("B is a Maximum Number : ", b)
//     }
//     else{
//         console.log("C is a Maximum Number  ",c)
//     }
// }
// app(5,7,9)