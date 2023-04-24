const carrito = {
	productos: [
		{
			nombre: "papel higienico",
			unidades: 4,
			precio: 5,
		},
		{
			nombre: "chocolate",
			unidades: 2,
			precio: 1.5,
		},
	],
	get precioTotal() {
		return this.productos.reduce(
			(total, product) => total + product.precio * product.unidades,
			0
		);
	},
};

console.log(carrito.precioTotal);
