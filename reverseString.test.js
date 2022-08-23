const reverse = require('./reverseString')

test('reverse the characters in a string', () => {
    expect(reverse("hello")).toBe("olleh")
})