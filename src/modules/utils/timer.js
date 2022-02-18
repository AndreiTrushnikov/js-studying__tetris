// Таймер в хедере
function timerInput(timerInput, id) {
    if (timerInput) {
        timerInput.value++;

        if (timerInput.value < 10) {
            timerInput.value = ''+0+0+timerInput.value;
        }
        if ((timerInput.value >= 10) && (timerInput.value < 100)) {
            timerInput.value = ''+0+timerInput.value;
        }
        timerInput.setAttribute('value',  timerInput.value);

		// TODO: Сделать проигрыш в игре по достижении 999 секунд
		// if (timerInput.value === "999") clearInterval(id);
    }
}

export default timerInput;