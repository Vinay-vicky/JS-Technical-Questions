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


// <!DOCTYPE html>
// <html>
// <head>
//   <title>Factorial Calculator</title>
//   <style>
//     body {
//       text-align: center;
//       font-family: sans-serif;
//       padding: 30px;
//     }
//   </style>
// </head>
// <body>

//   <h2>Find Factorial of a Number</h2>
//   <input type="number" id="numberInput" placeholder="Enter a number">
//   <button onclick="findFactorial()">Calculate</button>
//   <p id="output"></p>

//   <script>
//     function findFactorial() {
//       let n = parseInt(document.getElementById("numberInput").value);
//       if (n < 0) {
//         document.getElementById("output").textContent = "Factorial not defined for negative numbers.";
//         return;
//       }

//       let fact = 1;
//       for (let i = 1; i <= n; i++) {
//         fact *= i;
//       }

//       document.getElementById("output").textContent = "Factorial of " + n + " is: " + fact;
//     }
//   </script>

// </body>
// </html>
