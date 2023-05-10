function randomNumber(min = 1, max = 10) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function guessNumber() {
	const randomN = randomNumber();

	let userNumber;
	while (
		(userNumber = window.prompt("Ingrese un numero entre 1 y 10")) != randomN
	) {
		if (!isNan(parseInt(userNumber))) {
			userNumber > randomN
				? alert("el numero es mayor")
				: alert("el numero es menor");
		} else {
			alert("ingrese un numero valido");
		}
	}

	return alert("ganaste");
}

console.log(guessNumber());
