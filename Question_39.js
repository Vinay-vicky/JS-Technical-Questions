// 39. Write a program to find maximum and minimum element in an array.

function app()
{
    const arr = [1,2,3,4,5,6]

   console.log(Math.max(...arr))
   console.log(Math.min(...arr))
}

app()

//In argument

function app(arr) {
    console.log("the Maximum element of an array is : ", Math.max(...arr));
    console.log("the Minimum element of an array is : ", Math.min(...arr));
}

app([1, 2, 3, 4, 5, 6]);