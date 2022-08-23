const capitalize = require('./capitalize')
const cap = require('./capitalize')

test('capitalize the first letter of a string', () => {
    expect(capitalize("hello")).toBe("Hello")
})