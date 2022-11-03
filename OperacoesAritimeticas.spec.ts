const { sum } = require("./sum");
const { divide } = require("./divide");
const { multiply } = require("./multiply");
const { subtract } = require("./subtract");

describe("Sum tests", () => {
    it("Adding 1+2 should return 3", () => {
        //scenery
        const expected = 3;

        //execution
        const result = sum(1, 2);

        //validation
        expect(result).toBe(expected);
    });

    it("Adding 5+7 should return 12", () => {
        //scenery
        const expected = 12;

        //execution
        const result = sum(5, 7);

        //validation
        expect(result).toBe(expected);
    });
})

describe("Division tests", () => {
    it("Dividing 10/2 should return 5", () => {
        //scenery
        const expected = 5;

        //execution
        const result = divide(10, 2);

        //validation
        expect(result).toBe(expected);
    });

    it("Dividing 30/3 should return 10", () => {
        //scenery
        const expected = 10;

        //execution
        const result = divide(30, 3);

        //validation
        expect(result).toBe(expected);
    });
})

describe("Multiplication tests", () => {
    it("Multiplying 10*2 should return 20", () => {
        //scenery
        const expected = 20;

        //execution
        const result = multiply(10, 2);

        //validation
        expect(result).toBe(expected);
    });

    it("Multiplying 5*9 should return 45", () => {
        //scenery
        const expected = 45;

        //execution
        const result = multiply(5, 9);

        //validation
        expect(result).toBe(expected);
    });
})

describe("Subtraction tests", () => {
    it("Subtracting 10-2 should return 8", () => {
        //scenery
        const expected = 8;

        //execution
        const result = subtract(10, 2);

        //validation
        expect(result).toBe(expected);
    });

    it("Subtracting 17-0 should return 17", () => {
        //scenery
        const expected = 17;

        //execution
        const result = subtract(17, 0);

        //validation
        expect(result).toBe(expected);
    });
})