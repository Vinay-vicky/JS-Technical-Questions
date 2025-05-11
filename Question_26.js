// 26. Write a C program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// Gross Salary = Basic Salary + HRA + DA

function app(salary)
{
   if(salary>20000)
    {
        let HRA = (salary/100) * 30;
        let DA = (salary / 100) * 95;
        let res = salary + HRA + DA;
        console.log(res)
    }
    else if(salary <= 20000 && salary > 10000)
    {
        let HRA = (salary/100) * 25;
        let DA = (salary / 100) * 90;
        let res = salary + HRA + DA;
        console.log(res)
    } 
    else{
        let HRA = (salary/100) * 20;
        let DA = (salary / 100) * 80;
        let res = salary + HRA + DA;
        console.log(res)
    }
}
app(8000)