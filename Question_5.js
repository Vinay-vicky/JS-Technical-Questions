//5) Write a function to remove duplicates from an array.

function app(arr)
{
   let sorted=arr.sort((a,b)=>a-b)
   console.log(... new Set(sorted))    
   let arr1=[]
       for(let i=0;i<=arr.length;i++)
       {
        if(arr[i]!==arr[i+1])
        {
            arr1.push(arr[i])
        }
       }
       console.log(arr1)
}
app([2,5,3,4,8,4,7,9,5,2,1])


// <!DOCTYPE html>
// <html>
// <head>
//   <title>Remove Duplicates</title>
//   <style>
//     body {
//       text-align: center;
//       font-family: sans-serif;
//       padding: 30px;
//     }
//   </style>
// </head>
// <body>

//   <h2>Remove Duplicates from Array</h2>
//   <input type="text" id="arrayInput" placeholder="Enter numbers separated by commas">
//   <button onclick="removeDuplicates()">Remove Duplicates</button>
//   <p id="output"></p>

//   <script>
//     function removeDuplicates() {
//       let input = document.getElementById("arrayInput").value;
//       let numbers = input.split(",").map(Number);
//       let unique = [...new Set(numbers)];
//       document.getElementById("output").textContent = "Unique values: " + unique.join(", ");
//     }
//   </script>

// </body>
// </html>


