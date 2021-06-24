import './style.sass'
import buildField from './game.js'

let cols = 9,
    rows = 9,
    bmbs = 10,
    difficulty = localStorage.getItem('diff') || 1;

document.querySelector('#reset-btn').addEventListener('click', () => {
    buildField(cols, rows, bmbs);
});

document.querySelectorAll('#settings input[name="settings-grade"]').forEach(el => el.addEventListener('click', () => {
    radioGrade();
    buildField(cols, rows, bmbs);
}));

document.querySelector(`#settings input[name="settings-grade"][value="${difficulty}"]`).click();

buildField(cols, rows, bmbs);

function radioGrade() {
    const grade = parseInt(document.querySelector('#settings input[name="settings-grade"]:checked').value);
    localStorage.setItem('diff', grade);
    difficulty = grade;
    document.documentElement.setAttribute('data-mobile', false);
    switch (grade) {
        case 2:
            cols = 16;
            rows = 16;
            bmbs = 40;
            break
        case 3:
            cols = 30;
            rows = 16;
            bmbs = 99;
            break
        case 4:
            const cz = 32;
            document.documentElement.setAttribute('data-mobile', true);
            cols = ~~((window.innerWidth - 20) / cz);
            rows = ~~((window.innerHeight - 20 - 60) / cz);
            bmbs = cols * rows * .2;
            break
        default:
            cols = 9;
            rows = 9;
            bmbs = 10;
    }
}

