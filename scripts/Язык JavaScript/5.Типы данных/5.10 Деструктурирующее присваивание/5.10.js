let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

// Максимальная зарплата
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let maxSalarie = 0;
    let emp = null;

    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSalarie < salary) {
            maxSalarie = salary;
            emp = name;
        }
  }
  return emp;
}