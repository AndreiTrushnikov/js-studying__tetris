export default function minmax(min, max) {
	return min - 0.5 + Math.random() * (max - min + 1);
}