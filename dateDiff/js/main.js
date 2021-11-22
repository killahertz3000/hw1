import "./pages/dateCalc.js";
import { Howl, Howler } from 'howler';

//скрыть показать калькулятор дат

let submitCalcDateButton = document.getElementById('submitCalcDate');
let calcDateDiv = document.getElementById('calcDate');

submitCalcDateButton.addEventListener('click', function () {
    if (calcDateDiv.style.display != "none") {
        calcDateDiv.style.display = "none";
    }
    else {
        calcDateDiv.style.display = "block";
    }
})

//скрыть показать таймер

let submitsubmitTimerButton = document.getElementById('submitTimer');
let timerDiv = document.getElementById('timer');

submitsubmitTimerButton.addEventListener('click', function () {
    if (timerDiv.style.display != "none") {
        timerDiv.style.display = "none";
    }
    else {
        timerDiv.style.display = "block";
    }
})

//таймер!

const input = document.getElementById('input');
const blockTime = document.querySelector('.time');
let sound = new Howl({
    src: ['sound/iphone.mp3'],
    volume: 0.8
});
let interval;

blockTime.innerHTML = 0;
input.value = 0;

document.getElementById('start').addEventListener('click', () => {
    if (input.value < 0) {
        input.value = 0;
        blockTime.innerHTML = 0;
    }

    blockTime.innerHTML = input.value;

    clearInterval(interval);
    interval = setInterval(subtractTime, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () => {
    input.value = 0;
    blockTime.innerHTML = 0;
});

function subtractTime() {
    if (blockTime.innerHTML > 0) {
        blockTime.innerHTML--;
        input.value--;
        if (input.value < 0 || blockTime.innerHTML == 0) {
            input.value = 0;
            blockTime.innerHTML = 0;
            sound.play();
        }
    } else {
        clearInterval(interval);
    }
};