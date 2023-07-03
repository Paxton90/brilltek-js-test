const { countTotalHoursWorked } = require('./employees')


/**
 * Count Employees Number by Factory
 * @param {Array} employeeType
 * @param {Array} employees
 * @param {Array} tasks
 * @returns {number}
 */
function calculateNeededDays(employeeType, employees, tasks){
    const workingHoursPerDay = countTotalHoursWorked(employeeType, employees)

    // calculate total taskHours
    let taskMins = 0
    tasks.forEach(task => {
        taskMins += task.duration
    })

    // needed day = taskHours divided by all employees total worked hours in a day
    const neededDays = (taskMins/60)/workingHoursPerDay
    return neededDays
}

module.exports = {
    calculateNeededDays: calculateNeededDays
}