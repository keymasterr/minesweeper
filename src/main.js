import './style.sass'
import buildField from './game.js'

let cols = 9,
    rows = 9,
    bmbs = 10

document.querySelector('#reset-btn').addEventListener('click', () => {
    buildField(cols, rows, bmbs);
});
document.querySelectorAll('.settings input[name="settings-grade"]').forEach(el => el.addEventListener('click', () => {
    radioGrade();
    buildField(cols, rows, bmbs);
}));

buildField(cols, rows, bmbs);

function radioGrade() {
    const grade = parseInt(document.querySelector('.settings input[name="settings-grade"]:checked').value);
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
        default:
            cols = 9;
            rows = 9;
            bmbs = 10;
    }
}

