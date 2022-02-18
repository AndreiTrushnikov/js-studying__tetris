import Field from './Field.js'; // Create Field

export default class Game {
	constructor() {}

	init() {
		const field = new Field();
		field.render();
	}
}
