/**
 * Count Employees Number by Factory
 * @param {Array} factories
 * @returns {Array}
 */
function countEmployeesByFactory(factories) {
    const employeeCounts = factories.map(factory => {
        return {
            name: factory.name,
            count: factory.employees.length
        }
    })
    return employeeCounts
}

function countFactoriesByEmployee() {
    // Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]
}

function orderEmployeesAlphabetically() {
    // Order employees list by alphabetical order // => { name: "BR2", employees: ["Jessie", "John", "Karen"] }
}

module.exports = {
    countEmployeesByFactory: countEmployeesByFactory,
    countFactoriesByEmployee: countFactoriesByEmployee,
    orderEmployeesAlphabetically: orderEmployeesAlphabetically
}