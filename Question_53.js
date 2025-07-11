// 51. Write a program to sort array items by searching through Name, Age, Salary by getting input from user.


const employees = [
  { name: 'Sara', age: 24, salary: 15000 },
  { name: 'John', age: 24, salary: 20000 },
  { name: 'Jack', age: 25, salary: 25000 }
];

const choice = prompt("Sort by:\n1. Name\n2. Age\n3. Salary\nEnter 1, 2, or 3:");

if (choice === "1") {
  // Sort by name (case-insensitive)
  employees.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  console.log("Sorted by name:");
  console.table(employees);
} 
else if (choice === "2") {
  // Sort by age
  employees.sort((a, b) => a.age - b.age);
  console.log("Sorted by age:");
  console.table(employees);
} 
else if (choice === "3") {
  // Sort by salary
  employees.sort((a, b) => a.salary - b.salary);
  console.log("Sorted by salary:");
  console.table(employees);
} 
else {
  console.log("Invalid choice.");
}
