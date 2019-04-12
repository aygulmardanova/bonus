import {getBonus} from "./lib.js";

document.querySelector('#bonus-btn').addEventListener('click', setBonus);

export function setBonus() {
    const sales = [12000, 8000, 10000, 15000, 2000];

    document.getElementById("bonus").innerHTML = getBonus(sales);
}