const mySqrt = require("./69_sqrt");

test("expect sqrt 4 to be 2", () => {
    expect(mySqrt(4)).toBe(2);
});

test("expect sqrt 8 to be 2", ()=> {
    expect(mySqrt(8)).toBe(2);
})
