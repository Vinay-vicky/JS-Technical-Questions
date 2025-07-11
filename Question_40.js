// 40. Write a Javascript program to count total number of duplicate elements in an array.

function countDuplicates(arr) {
    const elementCount = {};
    let duplicateCount = 0;

    // Count occurrences of each element
    arr.forEach(element => {
        elementCount[element] = (elementCount[element] || 0) + 1;
        // console.log(elementCount[element])
    });

    // Count how many elements have duplicates
    for (let key in elementCount) {
        if (elementCount[key] > 1) {
            duplicateCount++;
        }
    }

    return duplicateCount;
}

// Example usage:
const array = [1, 4 , 2, 3, 4, 2, 3, 5, 6, 1, 1];
console.log("Total number of duplicate elements:", countDuplicates(array));






// simple example 

function countDuplicates(arr) {
  const count = {};
  let duplicateCount = 0;

  arr.forEach(item => {
    count[item] = (count[item] || 0) + 1;
  });

  for (let key in count) {
    if (count[key] > 1) {
      duplicateCount++;
    }
  }

  return duplicateCount;
}

console.log(countDuplicates([1, 2, 2, 3, 4, 4, 4, 5])); // Output: 2
