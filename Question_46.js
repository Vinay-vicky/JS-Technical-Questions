// 46. Write a program to find total number of alphabets, digits or special character in a string.

// The test() method tests for a match in a string.

// If it finds a match, it returns true, otherwise it returns false.

// /[a-zA-Z]/ A to Z Uppercase a to z lowercase

function countAlphabets(str) {
    let count = 0;
    const characters = str.split('');
    for (let i = 0; i < characters.length; i++) {
        if (/[a-zA-Z]/.test(characters[i])) {
            count++;
        }
    }
    return count;
}

console.log(countAlphabets("Hello World123!")); // Output: 10