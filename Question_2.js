// 2) How would you check if a string is a palindrome?

function app(str) {

    const res= str.split("").reverse().join('')
    if(str===res)
    {
     console.log("This is Palindrome");
    }
    else{
    
               console.log("This is Not Palindrome");
}
}
app("dad")





// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Palindrome Checker</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       text-align: center;
//       padding: 50px;
//       background-color: #f0f0f0;
//     }
//     input, button {
//       padding: 10px;
//       font-size: 16px;
//       margin: 10px;
//     }
//     #result {
//       margin-top: 20px;
//       font-weight: bold;
//       color: #555;
//     }
//   </style>
// </head>
// <body>

//   <h1>Palindrome Checker</h1>
//   <input type="text" id="inputString" placeholder="Enter a string" />
//   <button onclick="checkPalindrome()">Check</button>
//   <div id="result"></div>

//   <script>
//     function checkPalindrome() {
//       const input = document.getElementById("inputString").value;
//       const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
//       const reversed = cleaned.split("").reverse().join("");
//       const isPalindrome = cleaned === reversed;

//       document.getElementById("result").textContent = 
//         isPalindrome 
//         ? `"${input}" is a palindrome!` 
//         : `"${input}" is not a palindrome.`;
//     }
//   </script>

// </body>
// </html>
