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

// Test countFactoriesByEmployee
test('Count Factories Number by Employee', () => {
    const factories = [
        { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
        { name: "BR2", employees: ["Jessie", "Karen", "John"] },
        { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
        { name: "BR4", employees: [] }
    ]

    const factoryCounts = countFactoriesByEmployee(factories)

    expect(factoryCounts).toEqual([
        { employee: 'John', count: 2 },
        { employee: 'Alice', count: 1 },
        { employee: 'Bob', count: 2 },
        { employee: 'Jessie', count: 2 },
        { employee: 'Karen', count: 2 },
        { employee: 'Miles', count: 1 },
        { employee: 'Eric', count: 1 },
        { employee: 'Henry', count: 1 },
    ])
})

// Test orderEmployeesAlphabetically
test('Order employees list by alphabetical order', () => {
    const factory = { name: "BR2", employees: ["Jessie", "Karen", "John"] }

    const orderedFactory = orderEmployeesAlphabetically(factory)

    expect(orderedFactory).toEqual({ name: "BR2", employees: ["Jessie", "John", "Karen"] })
})