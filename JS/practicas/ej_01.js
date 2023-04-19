function golfScore(par, strokes) {
	if (!par || !strokes) return "missing values";
	if (strokes <= 0) return "invalid strokes";

	let ranking;
	const names = [
		"Hole-in-one!",
		"Eagle",
		"Birdie",
		"Par",
		"Bogey",
		"Double Bogey",
		"Go Home!",
	];

	if (strokes === 1) {
		ranking = 0;
	} else if (strokes <= par - 2) {
		ranking = 1;
	} else if (strokes === par - 1) {
		ranking = 2;
	} else if (strokes === par) {
		ranking = 3;
	} else if (strokes === par + 1) {
		ranking = 4;
	} else if (strokes === par + 2) {
		ranking = 5;
	} else if (strokes >= par + 3) {
		ranking = 6;
	}

	return names[ranking];
}

// function golfScore(par, strokes) {
// 	if (!par || !strokes) return "missing values";
// 	if (strokes <= 0) return "invalid strokes";

// 	let ranking;
// 	const names = [
// 		"Hole-in-one!",
// 		"Eagle",
// 		"Birdie",
// 		"Par",
// 		"Bogey",
// 		"Double Bogey",
// 		"Go Home!",
// 	];

//     switch (true) {
//         case strokes <= par - 2:
//           ranking = 1;
//           break;
//         case strokes === par - 1:
//           ranking = 2;
//           break;
//         case strokes === par:
//           ranking = 3;
//           break;
//         case strokes === par + 1:
//           ranking = 4;
//           break;
//         case strokes === par + 2:
//           ranking = 5;
//           break;
//         case strokes >= par + 3:
//           ranking = 6;
//           break;
//         default:
//           return "invalid values"
//       }

// 	return names[ranking];
// }