import Rules from './Rules';

export default class Field {
    constructor() {
		this.row = 10;
        this.column = 15;
        this.mainFieldContainer = document.getElementById('tetris');
    }

    createHeaderInput(id, value, className = 'tetris-header__btn', type = 'text', rw = true) {
        let inputEl = document.createElement('input');
        inputEl.className = className;
        inputEl.type = type;
        inputEl.readOnly = rw;
        inputEl.id = id;
        inputEl.value = value;

        return inputEl
    }

	createTitle(title) {
		let titleBlock = document.createElement('div');
		titleBlock.className = 'tetris-title';
		titleBlock.textContent = title;

		return titleBlock;
	}

    createFieldBG() {
        let fieldContEl = document.createElement('div');
        let fieldHeaderEl = document.createElement('div');
        let fieldBody = document.createElement('div');

        fieldContEl.className = 'tetris-wrap';
        fieldHeaderEl.className = 'tetris-header';
        fieldBody.className = 'tetris-body';

        fieldBody.id = 'tetris-body';

		fieldHeaderEl.appendChild(this.createTitle('Tetris'));
        fieldHeaderEl.appendChild(this.createHeaderInput('reset', 'Start/Reset'))
        fieldHeaderEl.appendChild(this.createHeaderInput('timer', '000'))

        // Заполняем ячейками body
        for (let i = 1; i <= this.row; i++) {
            for (let j = 1; j <= this.column; j++) {
                fieldBody.appendChild(this.createCell(i, j))
            }
        }

        fieldContEl.appendChild(fieldBody);
        fieldContEl.appendChild(fieldHeaderEl);

        this.mainFieldContainer.appendChild(fieldContEl);
    }

    createCell(x, y, className = 'tetris-cell') {
        let cellEl = document.createElement('div');
        cellEl.className = className;
        cellEl.dataset.x = x;
        cellEl.dataset.y = y;
        return cellEl
    }

	/*
	*	Рендер поля, создание правил работы с полем
	*/
    render() {
        this.createFieldBG();
		// const rules = new Rules(
		// 	document.getElementById("timer"),
		// 	this.row,
		// 	this.column
		// );
		rules.init();
	}
}
