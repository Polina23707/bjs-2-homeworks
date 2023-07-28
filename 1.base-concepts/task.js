"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d > 0) {
		let r1 = (-1 * b + Math.sqrt(d)) / (2 * a);
		let r2 = (-1 * b - Math.sqrt(d)) / (2 * a);
		arr.push(r1, r2);
	} else if (d === 0) {
		let r = -1 * b / (2 * a);
		arr.push(r);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthPercent = percent / 100 / 12;
	let credit = amount - contribution;
	let monthPayment = credit * (monthPercent + (monthPercent / ((Math.pow((1 + monthPercent), countMonths) - 1))));
	let totalMortgage = parseFloat((monthPayment * countMonths).toFixed(2));
	return (totalMortgage);
}