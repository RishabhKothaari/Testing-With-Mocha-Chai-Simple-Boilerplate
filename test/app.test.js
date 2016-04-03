import chai from "chai";
import { add } from "../src/app.js";

describe("App", () => {
    describe("add function", () => {
        it("should return 0 when no args are provided", () => {
            const result = add();
            chai.assert.strictEqual(result, 0);
        });

        it("should return the arg when 1 arg is provided", () => {
            const result = add(10);
            chai.assert.strictEqual(result, 10);
        });

        it("should return the sum of all the args when multiple args are provided", () => {
            const result = add(1, 2, 3, 4);
            chai.assert.strictEqual(result, 10);
        });
    });
});
