const analyze = require('./analyzeArray')

test('analyze array', () => {
    expect(analyze([3, 4, 2])).toStrictEqual({
        "average": 3,
        "length": 3,
        "maximum": 4,
        "minimum": 2,
    })
})