function palabraMasLarga(str) {
	if (!str) return "Enter a valid string";
	if (str.length === 1) return str;

	return str.split(" ").reduce((longest, current) => {
		if (current.length > longest.length) longest = current;

		return longest;
	}, "");
}
console.assert(palabraMasLarga("Erase una vez que se era") === "Erase");

function primeraMayuscula(str) {
	if (!str) return "Enter a valid string";
	let parsed = str.split(" ");

	const capitalizeWords = parsed.map((word) => {
		let capital = word[0].toUpperCase();
		let rest = word.substring(1).toLowerCase();

		return `${capital}${rest}`;
	});

	return capitalizeWords.join(" ");
}

console.assert(
	primeraMayuscula("En un lugar de la Mancha") === "En Un Lugar De La Mancha"
);
