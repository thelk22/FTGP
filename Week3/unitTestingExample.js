const assert = require("assert");
const { describe } = require("mocha");

let a = "not an array";
// This will print an assertion failure
// Note, the file stops running as soon as there is an assertion failure, so the second two assertions won't run
assert(Array.isArray(a), "assert failed: not an array");
assert.equal(true, Array.isArray(a), "assert.equal failed: not an array");
assert.ok(Array.isArray(a), "assert.ok failed: not an array");
