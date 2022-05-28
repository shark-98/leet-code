"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../utils/index");
const index_2 = require("./index");
describe('hasCycle', () => {
    it('is ok', () => {
        const testData = [
            { head: (0, index_1.createListNode)([3, 2, 0, -1], 1), result: true },
            { head: (0, index_1.createListNode)([1, 2], 0), result: true },
            { head: (0, index_1.createListNode)([1]), result: false },
        ];
        testData.forEach(({ head, result }) => {
            expect((0, index_2.hasCycle)(head)).toStrictEqual(result);
        });
    });
});
