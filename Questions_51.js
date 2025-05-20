// 51. Write a program to find array items by searching through Name, Age, Salary by getting input from user.


const employees = [
      { name: 'Sara', age: 24, salary: 15000 },
      { name: 'John', age: 24, salary: 20000 },
      { name: 'Jack', age: 25, salary: 25000 }
    ];

    const choice = prompt("Search by:\n1. Name\n2. Age\n3. Salary\nEnter 1, 2, or 3:");

    if (choice === "1") {
      let name = prompt("Enter name to search:");
      let result = employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
      console.log(result ? result : "Employee not found.");
    } 
    else if (choice === "2") {
      let age = parseInt(prompt("Enter age to search:"));
      let result = employees.find(emp => emp.age === age);
      console.log(result ? result : "Employee not found.");
    } 
    else if (choice === "3") {
      let salary = parseInt(prompt("Enter salary to search:"));
      let result = employees.find(emp => emp.salary === salary);
      console.log(result ? result : "Employee not found.");
    } 
    else {
      console.log("Invalid choice.");
    }











    // const workers = [
    //  {name: 'vinay', age:24, salary:30000},
    //  {name: 'kishore', age:21, salary:20000},
    //  {name: 'Shruthi', age:23, salary:35000},
    //  {name: 'diliban', age:23, salary:25000},
    //  {name: 'Bharath', age:21, salary:26000},
    //  {name: 'Sangeetha', age:24, salary:32000},
    //  ];
     
    //  const Options = prompt("Search by:\n1. Name\n2. Age\n3.. Salary\n Enter 1, 2 or 3:");
     
    //  if (Options === "1") {
    //      let name = prompt("Enter name to search: ");
    //      let result = workers.filter(wor => wor.name.toLowerCase() === name.toLowerCase());
    //      console.log(result.length ? result : "employee not found.");
    //  }
    //   else if (Options === "2") {
    //       let age = parseInt(prompt("Enter age to search: "));
    //       let result = workers.filter(wor => wor.age === age);
    //       console.log(result.length ? result : "employee not found.");
    //  }
    //  else if (Options === "3") {
    //      let salary = parseInt(prompt("Enter salary to search: "));
    //      let result = workers.filter(wor => wor.salary === salary);
    //      console.log(result.length ? result : "employee not found.");
    //  }
    //  else {
    //      console.log("Invalid choice.")
    //  }