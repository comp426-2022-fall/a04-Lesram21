
export function roll(sides, dice, rolls) {
	let results = [];

	for (let i=0; i<rolls; i++) {
		let total = 0;
		for (let j=0; j<dice; j++) {
			let currentroll = 1 + Math.floor(Math.random() * sides);
			total += currentroll;
		}
		results.push(total);
	}

	let result = {sides: sides, dice: dice, rolls: rolls, results: results};
	
	return result;
}

