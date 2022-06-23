const {validateName} = require("./../schema/resolvers")

test("returns false for empty name", () => {
    expect(validateName('')).toBe(false)
})

test("returns false for only a space character", () => {
    expect(validateName(' ')).toBe(false)
})

test("returns false for name with numbers", () => {
    expect(validateName('Yazeed22')).toBe(false)
})

test("returns true for name with only letters", () => {
    expect(validateName('Yazeed Hani')).toBe(true)
})