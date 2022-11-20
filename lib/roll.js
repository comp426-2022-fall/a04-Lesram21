#!/usr/bin/env node

export default function roll(sides, dice, rolls) {
	let total = [];
	for (let i=0; i<rolls; i++) {
		let randnum = Math.floor(Math.random() * sides * dice) + 1
		total[i] = randnum;
	}

	let result = {sides: sides, dice: dice, rolls: rolls, results: results};
	
	return result;
}

