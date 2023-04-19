function isValidValue(n) {
	return n > 0 && Number.isInteger(n);
}

function calcularDiasCrecimiento(
	velocidadCrecimiento,
	velocidadDecrecimiento,
	alturaDeseada
) {
	if (
		!isValidValue(velocidadCrecimiento) ||
		!isValidValue(velocidadDecrecimiento) ||
		!isValidValue(alturaDeseada)
	)
		return "Only positive integer values";

	if (velocidadDecrecimiento > velocidadCrecimiento)
		return "velocidadDecrecimiento can't be greater than velocidadCrecimiento";

	const totalDays = Math.ceil(
		alturaDeseada / (velocidadCrecimiento - velocidadDecrecimiento)
	);

	return totalDays;
}

console.log(calcularDiasCrecimiento(10, 5, 30));
