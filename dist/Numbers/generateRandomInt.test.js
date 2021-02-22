"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Numbers_1 = require("./Numbers");
describe("Basic Functions ", () => {
    it('generates a random integer', () => {
        const randomNumber = Numbers_1.Numbers.generateRandomInteger();
        expect(Number.isInteger(randomNumber)).toBeTruthy();
    });
    it('generates integer in range', () => {
        const NON_RANDOM_VALUE = 12;
        const randomNumber = Numbers_1.Numbers.generateRandomInteger(NON_RANDOM_VALUE, NON_RANDOM_VALUE);
        expect(randomNumber).toBe(NON_RANDOM_VALUE);
    });
    it('can generate negative numbers', () => {
        const randomNumber = Numbers_1.Numbers.generateRandomInteger(-12, 0);
        expect(randomNumber < 0).toBeTruthy();
    });
});
describe("Common Errors", () => {
    it('throws error for min > max', () => {
        const randomNumber = () => Numbers_1.Numbers.generateRandomInteger(12, 0);
        expect(randomNumber).toThrowError();
    });
    it('throws Error for float min input', () => {
        const randomNumber = () => Numbers_1.Numbers.generateRandomInteger(0.1, 1);
        expect(randomNumber).toThrowError();
    });
    it('throws Error for float max input', () => {
        const randomNumber = () => Numbers_1.Numbers.generateRandomInteger(1, 1.2);
        expect(randomNumber).toThrowError();
    });
});
