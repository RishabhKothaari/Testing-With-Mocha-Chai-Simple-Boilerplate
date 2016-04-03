var chai = require("chai");
var app = require("../src/app.js");

describe("App", function() {
    var add = app.add;

    describe("add function", function() {
        it("should return 0 when no args are provided", function() {
            var result = add();
            chai.assert.strictEqual(result, 0);
        });

        it("should return the arg when 1 arg is provided", function() {
            var result = add(10);
            chai.assert.strictEqual(result, 10);
        });

        it("should return the sum of all the args when multiple args are provided", function() {
            var result = add(1, 2, 3, 4);
            chai.assert.strictEqual(result, 10);
        });
    });
});
