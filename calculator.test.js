const calc = require('./calculator.js')

test('test sum', () => {
    expect(calc.sum(4, 5)).toBe(9)
})

test('test dif', () => {
    expect(calc.difference(7, 5)).toBe(2)
})

test('test product', () => {
    expect(calc.product(4, 5)).toBe(20)
})

test('test quotient', () => {
    expect(calc.quotient(40, 5)).toBe(8)
})