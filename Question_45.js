// 45. Write a program to toggle case of each character of a string.
// Input : MynameSumit123
// Output : mYNAMEsUMIT123
function app(str)
{
    let res = ''
    for(check of str)
    {
        if(check === check.toLowerCase())
        {
           res = res + check.toUpperCase();
        }else{
            res = res + check.toLowerCase();
        }
    }
    console.log(res)
}
app("MynameSumit123")