// 44. Write a program to count total number of vowels and consonants in a string.

function app(str)
{
    let vowels = 0;
    let consonants = 0;
    for(check of str)
    {
        if(check === ","){}else{
        if(check === "a" || check === "e" || check === "i" || check === "o" || check === "u")
        {
            vowels++;
        }
        else
        {
            consonants++;
        }
    }
    }
    console.log(vowels)
    console.log(consonants)
}
app("a,b,c,v,i,d")