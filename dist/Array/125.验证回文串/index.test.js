"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('isPalindrome', () => {
    it('is ok', () => {
        const testData = [
            { s: 'A man, a plan, a canal: Panama', result: true },
            { s: 'race a car', result: false },
            { s: 'ab_A', result: true },
            { s: 'OP', result: false },
            { s: '0P', result: false },
            { s: '.', result: true },
        ];
        testData.forEach(({ s, result }) => {
            expect((0, index_1.isPalindrome)(s)).toBe(result);
        });
    });
});
