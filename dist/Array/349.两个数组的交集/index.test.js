"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('intersection', () => {
    it('is ok', () => {
        const testData = [
            { nums1: [1, 2, 2, 1], nums2: [2, 2], result: [2] },
            { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4], result: [9, 4] },
        ];
        testData.forEach(({ nums1, nums2, result }) => {
            expect((0, index_1.intersection)(nums1, nums2)).toStrictEqual(result);
        });
    });
});
