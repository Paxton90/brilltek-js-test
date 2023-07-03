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


/**
 * Count Factories Number by Employee
 * @param {Array} factories
 * @returns {Array}
 */
function countFactoriesByEmployee(factories) {
    const factoryCounts = {}
    factories.forEach(factory => {
        factory.employees.forEach(employee => {
            factoryCounts[employee] = (factoryCounts[employee] | 0) + 1
        })
    })


    // format to [{employee: employee, count: count}]
    formattedFactoryCounts = []
    Object.keys(factoryCounts).forEach(employee => {
        formattedFactoryCounts.push({employee: employee, count: factoryCounts[employee]})
    })

    return formattedFactoryCounts
}

/**
 * Count Factories Number by Employee
 * @param {Object} factory
 * @returns {Object}
 */
function orderEmployeesAlphabetically(factory) {
    orderedFactory = {
        name: factory.name,
        employees: factory.employees.sort()
    }
    return orderedFactory
}

module.exports = {
    countEmployeesByFactory: countEmployeesByFactory,
    countFactoriesByEmployee: countFactoriesByEmployee,
    orderEmployeesAlphabetically: orderEmployeesAlphabetically
}