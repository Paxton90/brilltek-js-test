const { hoursDifference } = require('./utils')


/**
 * Count Employees Number by Factory
 * @param {Array} employeeType
 * @param {Array} employees
 * @returns {number}
 */
function countTotalHoursWorked(employeeType, employees) {
    // Calculate workingHours every employeeType
    const workingHours = {}
    employeeType.forEach(type => {
        workingHours[type.id] = hoursDifference(type.work_begin, type.work_end)
    })

    // Add all employee work time
    let totalHoursWorked = 0
    employees.forEach(employee => {
        totalHoursWorked += workingHours[employee.type]
    })

    return totalHoursWorked
}

function howManyEmplyeeBytime() {
    // Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int
}

module.exports = {
    countTotalHoursWorked: countTotalHoursWorked,
    howManyEmplyeeBytime: howManyEmplyeeBytime
}