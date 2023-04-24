function onlyUniques(...args) {
	let uniques = [];

	args.forEach((elem) => {
		!uniques.includes(elem) && uniques.push(elem);
	});

    return uniques;
}

console.log(onlyUniques(1, 1, 1, 2, 3, 4, 4, 5));
