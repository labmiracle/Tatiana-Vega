let count = 0;

function cardValue(card) {
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			return 1;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			return -1;
		default:
			return 0;
	}
}

function cc(card) {
	count += cardValue(card);

	return `${count} ${count >= 0 ? "Bet" : "Hold"}`;
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("A"));
console.log(cc("K"));
