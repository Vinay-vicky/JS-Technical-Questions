// 3) Write a function that returns the Fibonacci sequence up to a given number n.

function app(num){
    
    let num1=0;
    let num2=1;
    for(let i=0;i<=num;i++)
    {
        let sum=num1+num2;
            num1=num2;
            num2=sum;
            console.log(sum)
    }
}
app(5)


// <!DOCTYPE html>
// <html>
// <head>
//   <title>Fibonacci Sequence</title>
//   <style>
//     body {
//       text-align: center;
//       font-family: sans-serif;
//       padding: 30px;
//     }
//   </style>
// </head>
// <body>

//   <h2>Fibonacci Sequence Up to n</h2>
//   <input type="number" id="number" placeholder="Enter a number">
//   <button onclick="showFibonacci()">Show</button>
//   <p id="output"></p>

//   <script>
//     function showFibonacci() {
//       let n = parseInt(document.getElementById("number").value);
//       let a = 0, b = 1;
//       let result = "";

//       while (a <= n) {
//         result += a + " ";
//         let next = a + b;
//         a = b;
//         b = next;
//       }

//       document.getElementById("output").textContent = "Fibonacci: " + result;
//     }
//   </script>

// </body>
// </html>

