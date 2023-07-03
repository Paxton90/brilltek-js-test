const { countTotalHoursWorked, howManyEmplyeeBytime } = require('../src/employees')

// Test countTotalHoursWorked
test('Count total hours worked in 1 day', () => {
    const employeeType = [
        { id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00" }, // 8hrs
        { id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00" }, // 9hrs
        { id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" }, // 4hrs
    ]

    const employees = [
        { id: 1, name: "Alice", type: 2 },
        { id: 2, name: "Bob", type: 3 },
        { id: 3, name: "John", type: 2 },
        { id: 4, name: "Karen", type: 1 },
        { id: 5, name: "Miles", type: 3 },
        { id: 6, name: "Henry", type: 1 }
    ] // 9 + 4 + 9 + 8 + 4 + 8 = 42

    const totalHoursWorked = countTotalHoursWorked(employeeType, employees)

    expect(totalHoursWorked).toEqual(42)
})
