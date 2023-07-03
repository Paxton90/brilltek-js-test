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

module.exports = {
    hoursDifference: hoursDifference
}