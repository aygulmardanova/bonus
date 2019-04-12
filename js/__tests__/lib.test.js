import {getBonus} from "../lib.js";

test("calculated bonus must be correct", () => {
    const items = [12000, 8000, 10000, 15000, 2000];

    const expected = 350;

    const result = getBonus(items);

    expect(result).toBe(expected);
});