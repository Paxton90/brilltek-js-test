const { placeholder } = require('@babel/types')
const { hoursDifference, isTimeBetween } = require('./utils')


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

/**
 * Count Employees Number by Factory
 * @param {Array} employeeType
 * @param {Array} employees
 * @param {string} dayTime
 * @returns {number}
 */
function howManyEmployeeBytime(employeeType, employees, dayTime) {
    // extract workingTime from employeeType
    const workingTime = {}
    employeeType.forEach(type => {
        workingTime[type.id] = {
            "work_begin": type.work_begin,
            "work_end": type.work_end
        }
    })

    // +1 if working
    let howManyEmplyeeWorking = 0
    employees.forEach(employee => {
        let work_begin = workingTime[employee.type]["work_begin"]
        let work_end = workingTime[employee.type]["work_end"]
        if(isTimeBetween(work_begin, work_end, dayTime)) howManyEmplyeeWorking ++
    })

    return howManyEmplyeeWorking
}

module.exports = {
    countTotalHoursWorked: countTotalHoursWorked,
    howManyEmployeeBytime: howManyEmployeeBytime
}