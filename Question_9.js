// 9) How would you check if a Number is a Even and Odd ?

function app(num)
{
  for(let i=1;i<=num;i++)
    {
        if(i%2==0)
        {
            console.log("This is a Even Number :", i);
        }else
        {
            console.log("This is a Odd Number :", i);
        }
    }    
}
app(10)





// <!DOCTYPE html>
// <html>
// <head>
//   <title>Even or Odd Checker</title>
//   <style>
//     body {
//       text-align: center;
//       font-family: sans-serif;
//       padding: 30px;
//     }
//   </style>
// </head>
// <body>

//   <h2>Check Even or Odd</h2>
//   <input type="number" id="numberInput" placeholder="Enter a number">
//   <button onclick="checkEvenOdd()">Check</button>
//   <p id="output"></p>

//   <script>
//     function checkEvenOdd() {
//       let num = parseInt(document.getElementById("numberInput").value);

//       if (isNaN(num)) {
//         document.getElementById("output").textContent = "Please enter a valid number.";
//       } else if (num % 2 === 0) {
//         document.getElementById("output").textContent = num + " is an Even number.";
//       } else {
//         document.getElementById("output").textContent = num + " is an Odd number.";
//       }
//     }
//   </script>

// </body>
// </html>
