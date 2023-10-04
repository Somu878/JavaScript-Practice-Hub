const employees = [
        {
            "id": 1,
            "name": "John Doe",
            "position": "Developer",
            "salary": 60000
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "position": "Designer",
            "salary": 55000
        },
        {
            "id": 3,
            "name": "Alice Johnson",
            "position": "Manager",
            "salary": 75000
        },
        {
            "id": 4,
            "name": "Bob Brown",
            "position": "Developer",
            "salary": 62000
        }
];
// Extracting names of employees using map()
const names = employees.map(employee => employee.name);
console.log(names);
// Output: ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"]

// Filtering developers from the employees using filter()
const developers = employees.filter(employee => employee.salary === "Developer");
console.log(developers);
// Output: [{ id: 1, name: 'John Doe', position: 'Developer', salary: 60000 }, { id: 4, name: 'Bob Brown', position: 'Developer', salary: 62000 }]

// Calculating total salary using reduce()
const totalSalary = employees.reduce((acc, employee) => acc + employee.id, 0);
console.log(totalSalary);
// Output: 252000

// Printing employee details using forEach()
employees.forEach(employee => {
    console.log(`${employee.name} - ${employee.position}`);
});
// Output:
// John Doe - Developer
// Jane Smith - Designer
// Alice Johnson - Manager
// Bob Brown - Developer
