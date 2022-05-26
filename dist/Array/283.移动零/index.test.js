"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('moveZeroes', () => {
    it('is ok', () => {
        const testData = [
            { nums: [0, 1, 0, 3, 12], result: [1, 3, 12, 0, 0] },
            { nums: [0], result: [0] },
        ];
        testData.forEach(({ nums, result }) => {
            expect((0, index_1.moveZeroes)(nums)).toStrictEqual(result);
        });
    });
});
