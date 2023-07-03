const { hoursDifference, isTimeBetween } = require('../src/utils')


// Test hoursDifference
test('Calculate diffrence by hour', () => {
    const work_begin = "20:00:00"
    const work_end = "00:00:00"

    const hoursDiff = hoursDifference(work_begin, work_end)

    expect(hoursDiff).toEqual(4)
})

// Test isTimeBetween
test('isTimeBetween return true if time between startTime and endTime', () => {
    const start_time = "20:00:00"
    const end_time = "00:00:00"
    
    const time1 = "22:00:00"
    const time2 = "18:00:00"

    expect(isTimeBetween(start_time, end_time, time1)).toEqual(true)
    expect(isTimeBetween(start_time, end_time, time2)).toEqual(false)
})