const assert = require("assert");

// Mocha example

// Mocha contains two primary methods: describe (multiple tests) and it (define one test)
// This test will fail
// Note: to run tests, pass "npx mocha mochaExample.js" to the CLI
describe("My tests", function () {
  describe("First tests", function () {
    it("Test if 1 equals 2", function () {
      assert.equal(1, 2);
    });
  });
});
