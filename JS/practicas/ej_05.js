function camelize(str) {
	if (!str) return "enter a valid string";

	let parsed = str.split(" ");

	const capitalizeWords = parsed.map((word, index) => {
		if (index === 0) return word.toLowerCase();

		let capital = word[0].toUpperCase();
		let rest = word.substring(1).toLowerCase();

		return `${capital}${rest}`;
	});

	return capitalizeWords.join("");
}
console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");
