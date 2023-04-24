function addOnlyNums(...args) {
	return args.reduce((total, elem) => {
		return typeof elem === "number" ? total + elem : total;
	}, 0);
}


console.log(addOnlyNums("hola", 2, 4, 1, "chau"));
