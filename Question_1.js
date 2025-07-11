// 1) Write a function to reverse a string in JavaScript.

function app(str)
{
    let res = str.split("").reverse().join("")
    console.log(res)
}
app("sumit")

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Reverse String</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       text-align: center;
//       padding: 50px;
//       background-color: #f4f4f4;
//     }
//     input, button {
//       padding: 10px;
//       margin: 10px;
//       font-size: 16px;
//     }
//     #result {
//       margin-top: 20px;
//       font-weight: bold;
//       color: #333;
//     }
//   </style>
// </head>
// <body>

//   <h1>String Reverser</h1>
//   <input type="text" id="inputString" placeholder="Enter a string" />
//   <button onclick="reverseString()">Reverse</button>
//   <div id="result"></div>

//   <script>
//     function reverseString() {
//       const input = document.getElementById("inputString").value;
//       const reversed = input.split("").reverse().join("");
//       document.getElementById("result").textContent = "Reversed: " + reversed;
//     }
//   </script>

// </body>
// </html>
