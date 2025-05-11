// 2) How would you check if a string is a palindrome?

function app(str) {

    const res= str.split(" ").reverse().join('')
    if(str===res)
    {
     console.log("This is Palindrome");
    }
    else{
    
               console.log("This is Not Palindrome");
}
}
app("dad")