/**
 * Calculate diffrence by hour
 * @param {string} startTime
 * @param {string} endTime
 * @returns {number}
 */
function hoursDifference(startTime, endTime) {
    let startDate = new Date('2023-07-03T'.concat(startTime))
    let endDate = new Date('2023-07-03T'.concat(endTime))

    // hours in day are cycling
    if (endTime === "00:00:00") {
        endDate = new Date('2023-07-04T00:00:00')
    }

    const timeDifference = endDate.getTime() - startDate.getTime()
    const hoursDifference = Math.abs(timeDifference) / (1000 * 60 * 60)

    return hoursDifference
}

/**
 * Calculate diffrence by hour
 * @param {string} startTime
 * @param {string} endTime
 * @param {string} dayTime
 * @returns {boolean}
 */
function isTimeBetween(startTime, endTime, dayTime) {
    let startDate = new Date('2023-07-03T'.concat(startTime))
    let endDate = new Date('2023-07-03T'.concat(endTime))
    let time = new Date('2023-07-03T'.concat(dayTime))

    // hours in day are cycling
    if (endTime === "00:00:00") {
        endDate = new Date('2023-07-04T00:00:00')
    }

    return time >= startDate && time <= endDate;
}


module.exports = {
    hoursDifference: hoursDifference,
    isTimeBetween: isTimeBetween
}