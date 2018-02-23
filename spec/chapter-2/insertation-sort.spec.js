const insertationSort = require('./../../src/chapter-2/insertation-sort');

describe('Insertation Sort', () => {
    it('Simply array of numbers sort', () => {
        const data = [35, 72, 63, 12, 7];
        const result = insertationSort(data);

        expect(result).toEqual([7, 12, 35, 63, 72]);
    });
});
