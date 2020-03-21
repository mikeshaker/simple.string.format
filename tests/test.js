require("../index");
const assert = require("assert");

describe("Array", function() {
  describe("#indexOf()", function() {
    it("string format", function() {
      var result = "hello {0}".format("world");
      assert.equal(result, "hello world");
    });
    it("string format2", function() {
        var result = "hello {0} {1}".format("world", ". enjoy");
        assert.equal(result, "hello world . enjoy");
      });
  });
});
