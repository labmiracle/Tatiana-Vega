//si la funcion puede recibir argumentos de cualquier tipo
function sum(...args) {
	return [...args];
}

//si la funcion puede recibir solo numeros

function sum1(...args) {
	return args.reduce((total, num) => total + num, 0);
}

console.log(sum({ 1: 2 }, ["hola"], 3));
console.log(sum1(2, 3, 4, 5));
