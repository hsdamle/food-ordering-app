const { default: sum } = require("../components/sum")

test("sum function should return sum of two numbers", () => {
    const total = sum(3,2);
    // Assertion
    expect(total).toBe(5);
})