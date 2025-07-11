//4) find the largest number in an array?

function app(arr)
{
//    let res= Math.max(...arr)
//    console.log(res)    
let res= arr.sort((a,b)=>a-b);
console.log(res[res.length-1])
}
app([2,3,14,5,4,8,5,1])


// <!DOCTYPE html>
// <html>
// <head>
//   <title>Find Largest Number</title>
//   <style>
//     body {
//       text-align: center;
//       font-family: sans-serif;
//       padding: 30px;
//     }
//   </style>
// </head>
// <body>

//   <h2>Find the Largest Number in an Array</h2>
//   <input type="text" id="arrayInput" placeholder="Enter numbers separated by commas">
//   <button onclick="findLargest()">Find Largest</button>
//   <p id="output"></p>

//   <script>
//     function findLargest() {
//       let input = document.getElementById("arrayInput").value;
//       let numbers = input.split(",").map(Number);
//       let largest = Math.max(...numbers);
//       document.getElementById("output").textContent = "Largest number: " + largest;
//     }
//   </script>

// </body>
// </html>

