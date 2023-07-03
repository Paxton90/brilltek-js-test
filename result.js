const { countEmployeesByFactory, countFactoriesByEmployee, orderEmployeesAlphabetically } = require('./src/factories')
const { countTotalHoursWorked, howManyEmployeeBytime } = require('./src/employees')
const { calculateNeededDays } = require('./src/tasks')

const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
]

const factory = { name: "BR2", employees: ["Jessie", "Karen", "John"] }

const employeeType = [
    { id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },
    { id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },
    { id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },
]

const employees = [
    { id: 1, name: "Alice", type: 2 },
    { id: 2, name: "Bob", type: 3 },
    { id: 3, name: "John", type: 2 },
    { id: 4, name: "Karen", type: 1 },
    { id: 5, name: "Miles", type: 3 },
    { id: 6, name: "Henry", type: 1 }
]

const dayTime = "15:00:00"

const tasks = [
    { id: 1, title: "task01", duration: 60 }, //min
    { id: 2, title: "task02", duration: 120 },
    { id: 3, title: "task03", duration: 180 },
    { id: 4, title: "task04", duration: 360 },
    { id: 5, title: "task05", duration: 30 },
    { id: 6, title: "task06", duration: 220 },
    { id: 7, title: "task07", duration: 640 },
    { id: 8, title: "task08", duration: 250 },
    { id: 9, title: "task09", duration: 119 },
    { id: 10, title: "task10", duration: 560 },
    { id: 11, title: "task11", duration: 340 },
    { id: 12, title: "task12", duration: 45 },
    { id: 13, title: "task13", duration: 86 },
    { id: 14, title: "task14", duration: 480 },
    { id: 15, title: "task15", duration: 900 }
]

console.log("\n\n1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]")
console.log("factories = " + JSON.stringify(factories, null, 2))
console.log("\nemployeeCounts = " + JSON.stringify(countEmployeesByFactory(factories), null, 2))

console.log("\n\n2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]")
console.log("\nfactoryCounts = " + JSON.stringify(countFactoriesByEmployee(factories), null, 2))

console.log("\n\n3. Order employees list by alphabetical order // => { name: \"BR2\", employees: [\"Jessie\", \"John\", \"Karen\"] }")
console.log("\nfactory = " + JSON.stringify(factory, null, 2))
console.log("\norderedFactory = " + JSON.stringify(orderEmployeesAlphabetically(factory), null, 2))

console.log("\n\n4. Count total hours worked in 1 day ? // => 39")
console.log("\nemployeeType = " + JSON.stringify(employeeType, null, 2))
console.log("\nemployees = " + JSON.stringify(employees, null, 2))
console.log("\ntotalHoursWorked = " + countTotalHoursWorked(employeeType, employees))

console.log("\n\n5. Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int")
console.log("\ndayTime = " + dayTime)
console.log("\nhowManyEmplyeeWorking = " + JSON.stringify(howManyEmployeeBytime(employeeType, employees, dayTime)))

console.log("\n\n6. ow many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.")
console.log("\ntasks = " + JSON.stringify(tasks, null, 2))
console.log("\nneededDays = " + calculateNeededDays(employeeType, employees, tasks))

console.log("\nEND")