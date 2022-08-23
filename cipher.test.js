const cipher = require('./cipher')

test('cipher a string', () => {
    expect(cipher("abc", 1)).toBe("bcd")
})

test('cipher a string', () => {
    expect(cipher("abc def", 1)).toBe("bcd efg")
})