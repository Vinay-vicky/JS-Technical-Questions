// 10). Print all Prime Numbers 

function app(num)
{
  for(let i=2;i<=num;i++)
  {  
    for( j=2;j<=i;j++)
     {
       if(i%j===0)
       {
        break
        // console.log(i)
       }
     } 
     if(i===j)
        {
            console.log("This is a Prime Number : ", i)
        }
        else{
            console.warn("This is Not a Prime Number  : ", i)
        }
      }  
}
app(10)





// <!DOCTYPE html>
// <html>
// <head>
//   <title>Prime Numbers</title>
//   <style>
//     body {
//       text-align: center;
//       font-family: sans-serif;
//       padding: 30px;
//     }
//   </style>
// </head>
// <body>

//   <h2>Print All Prime Numbers Up To n</h2>
//   <input type="number" id="numberInput" placeholder="Enter a number">
//   <button onclick="printPrimes()">Show Primes</button>
//   <p id="output"></p>

//   <script>
//     function printPrimes() {
//       let n = parseInt(document.getElementById("numberInput").value);
//       let result = "";

//       for (let i = 2; i <= n; i++) {
//         let isPrime = true;

//         for (let j = 2; j <= Math.sqrt(i); j++) {
//           if (i % j === 0) {
//             isPrime = false;
//             break;
//           }
//         }

//         if (isPrime) {
//           result += i + " ";
//         }
//       }

//       document.getElementById("output").textContent = 
//         result ? "Prime numbers: " + result : "No prime numbers found.";
//     }
//   </script>

// </body>
// </html>
