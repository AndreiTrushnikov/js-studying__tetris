import timer from "./utils/timer.js";
import checkTheSameRand from "./utils/checkTheSameRand.js"
import minmax from "./utils/minmax";

export default class Rules {
	constructor($root, min, max, row, column, quantityOfMines) {
		this.timerId = "";
		this.$root = $root;
		this.isGameStart = false;
		this.isGameLoose = true;

		this.row = row;
		this.column = column;

		this.arrWithRandomMines = []; // Массив с ячейками, содержащими мины
		this.minesObj = {};
		this.field = document.querySelector("#tetris");
		this.body = document.getElementById("tetris-body");
		this.cells = document.querySelectorAll(".tetris-cell");
		this.resetBtn = document.querySelector("#reset");
		this.tablo = document.querySelector("#tablo");

	}

	/*
	 * Создание рандомной фигуры
	 */
	createRandomFigures() {

	}

	/*
	 * Инициализация прослушивателей кликов
	 */
	initDOMListeners() {
		if (this.resetBtn) {
			this.resetBtn.addEventListener("click", () => {
				this.resetGame();
			})
		}

		if (this.body) {

		}
	}

	/*
	 * Запуск правил
	 */
	startGame() {
		console.clear();
		this.clearField();
		this.isGameStart = true;
		this.isGameLoose = false;

		// Запуск таймера
		this.startTimer(this.$root);

		// Создание массива с id мин
		this.arrWithRandomMines = this.createRandomMines(this.quantityOfMines, true);

		// Создание объекта по работе с данными на основе массива с id
		this.minesObj = this.createMinesObject(this.arrWithRandomMines);

		console.log("Game Started!");
	}




	/*
	 * Полный сброс игры
	 */
	resetGame(isLoose) {
		this.isGameStart = false;
		this.isGameLoose = true;
		this.arrWithRandomMines = [];

		if (isLoose) {
			this.stopTimer(true);
			console.log("Game Just Stopped!");
		} else {
			this.stopTimer(false);
			this.clearField();
			console.log("Game Fully Reset!");
		}
	}



	/*
	 * Очистка поля
	 */
	clearField() {
		this.field.classList.remove("lose");
		for (let cell in this.cells) {
			if (this.cells.hasOwnProperty(cell)) {
				this.cells[cell].innerHTML = "";
			}
		}
	}



	/*
	 * Запуск таймера игры
	 */
	startTimer() {
		this.timerId = setInterval(() => timer(this.$root, this.timerId), 1000);
	}



	/*
	 * Окончание работы таймера игры
	 */
	stopTimer(isLose) {
		clearInterval(this.timerId);
		isLose ? this.$root.value = this.$root.value : this.$root.value = "000";
	}



	/*
	 * Инициализация правил игры
	 */
	init() {
		this.initDOMListeners(this.$root);
	}
}