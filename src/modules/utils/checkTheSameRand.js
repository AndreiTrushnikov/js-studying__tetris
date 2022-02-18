import minmax from "./minmax";

// Проверка на то, чтобы не было одинаковых рандомных чисел
export default function checkTheSameRand(min, max, minesArray) {
	const tempRand = Math.round(minmax(min, max));
	console.log('minesArray 2',minesArray);
	if (minesArray.includes(tempRand)) {
		checkTheSameRand(min, max, minesArray);
	}
	return tempRand;
}