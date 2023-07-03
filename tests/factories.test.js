const { countEmployeesByFactory, countFactoriesByEmployee, orderEmployeesAlphabetically } = require('../src/factories')

// Test countEmployeesByFactory
test('Count Employees Number by Factory', () => {
    const factories = [
        { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
        { name: "BR2", employees: ["Jessie", "Karen", "John"] },
        { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
        { name: "BR4", employees: [] }
    ]

    const employeeCounts = countEmployeesByFactory(factories)

    expect(employeeCounts).toEqual([
        { name: 'BR1', count: 5 },
        { name: 'BR2', count: 3 },
        { name: 'BR3', count: 4 },
        { name: 'BR4', count: 0 },
    ])
})