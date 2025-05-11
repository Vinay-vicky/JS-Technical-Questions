// 41. Write a C program to sort array elements in ascending or descending order.

// The sort() function allows you to sort an array object by either the default sorting order, or by a custom sorting function.

function app()
{
 const arr = [1,3,2,3,4,5];
 let asc = arr.sort((a,b)=>a-b)  
 console.log("ascending : ",asc)
 let des = arr.sort((a,b)=>b-a)  
 console.log("descending : ",des)
}
app()