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




// <!DOCTYPE html>
// <html>
// <head>
//   <title>Armstrong Number Checker</title>
//   <style>
//     body {
//       text-align: center;
//       font-family: sans-serif;
//       padding: 30px;
//     }
//   </style>
// </head>
// <body>

//   <h2>Check Armstrong Number</h2>
//   <input type="number" id="numberInput" placeholder="Enter a number">
//   <button onclick="checkArmstrong()">Check</button>
//   <p id="output"></p>

//   <script>
//     function checkArmstrong() {
//       let num = parseInt(document.getElementById("numberInput").value);
//       let original = num;
//       let digits = num.toString().length;
//       let sum = 0;

//       while (num > 0) {
//         let digit = num % 10;
//         sum += Math.pow(digit, digits);
//         num = Math.floor(num / 10);
//       }

//       if (sum === original) {
//         document.getElementById("output").textContent = original + " is an Armstrong number.";
//       } else {
//         document.getElementById("output").textContent = original + " is NOT an Armstrong number.";
//       }
//     }
//   </script>

// </body>
// </html>

