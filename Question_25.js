// 25. Write a program to calculate whether character is in lowercase or uppercase.

function app(str)
{
    let check = str.toLowerCase()
    if(str=== check)
    {
        console.log("This value is a LowerCase :",str)
    }else{console.log("This value is a UpperCase :",str)}
}
app("A")