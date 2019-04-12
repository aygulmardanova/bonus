export function getBonus(items) {
    const minBorder = 10000;
    const percent = 0.05;

    let result = 0;

    for (const item of items) {
        if (item > minBorder) {
            result += (item - minBorder) * percent;
        }
    }

    return result;
}