import { arrayToList, listToArray } from "./DataList";
it('converts arrays to lists', () => {
    expect(arrayToList([1, 4, 3, 2, 5, 2])).toEqual({ "next": { "next": { "next": { "next": { "next": { "next": null, "val": 2 }, "val": 5 }, "val": 2 }, "val": 3 }, "val": 4 }, "val": 1 });
});
it('converts listToArray', () => {
    const list = arrayToList([]);
    expect(listToArray(list)).toEqual([0]);
});
it('converts listToArray', () => {
    const list = arrayToList([1, 4, 3, 2, 5, 2]);
    expect(listToArray(list)).toEqual([1, 4, 3, 2, 5, 2]);
});
//# sourceMappingURL=DataList.test.js.map