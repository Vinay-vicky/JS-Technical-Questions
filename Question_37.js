// 37. Write a Javascript program to print all natural numbers between 1 to n using recursion.

// function printRecursiveNum(num,currentValue) { 
//     if (currentValue<num) { 
//         return; 
//     } 
//     console.log(currentValue); 
// printRecursiveNum(num,currentValue -1); 
// } 
  
// const num = 1;

// printRecursiveNum(num,8)

function printRecursiveNum(num,currentValue) { 
    if (currentValue>num) { 
        return; 
    } 
    console.log(currentValue); 
printRecursiveNum(num,currentValue +1); 
} 
  
const num = 8;

printRecursiveNum(num,1)