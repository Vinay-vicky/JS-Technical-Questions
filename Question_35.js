// 35. Write a program to search an element in an array.

function app(search)
{
    const arr = [1,2,3,4,5,6,7,8,9,10];
    let res =  arr.indexOf(search)
    if(res !== undefined)
    {
        console.log(arr[res])
    }
    else{
        console.log("Number is not Found ")
    }
}
app(5)