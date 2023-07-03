const { hoursDifference } = require('../src/utils')


// Test hoursDifference
test('Calculate diffrence by hour', () => {
    const work_begin = "20:00:00"
    const work_end = "00:00:00"

    const hoursDiff = hoursDifference(work_begin, work_end)

    expect(hoursDiff).toEqual(4)
})