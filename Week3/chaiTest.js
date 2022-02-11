const expect = require("chai").expect;

function average(a, b, c) {
  return (a + b + c) / 3;
}

describe("Test the average function", function () {
  it("Average 1,2,3 and get 2 as answer", () => {
    const result = average(1, 2, 3);
    // Use Chai to assert the answer
    expect(result).to.be.eq(2);
  });
});
