const field = document.querySelector('#field');
const fieldInfoText = document.querySelector('#field-info-text');

let fieldModel = {};

export default function buildField(cols = 9, rows = 9, bmbs = 10) {
    cols = ~~cols;
    rows = ~~rows;
    bmbs = ~~bmbs;
    fieldModel = {};
    field.innerHTML = '';
    field.classList.remove('gameover', 'win');

    fieldInfoText.innerHTML = `${cols}×${rows}, <span id="flags-number">0</span>/${bmbs} mines`;

    let objArr = [],
        bmbArr = [],
        cellsQ = ~~(cols * rows);

    fieldModel = {
        cols: cols,
        cellsNumber: cellsQ,
        cellsOpen: 0,
        bombs: bmbs,
        flags: 0,
        cells: Array.from({length: cellsQ}, () => ({
            bomb: false,
            open: false,
            flag: false
        }))
    }

    // fill with bombs
    while (bmbArr.length < bmbs) {
        const r = ~~(Math.random() * cellsQ);
        if (bmbArr.indexOf(r) === -1) bmbArr.push(r);
    }

    bmbArr.forEach(v => {
        fieldModel.cells[v].bomb = true;
    });

    fieldModel.cells.forEach((_, i) => {
        const el = document.createElement('div');
        el.classList.add('cell');
        el.setAttribute('ndx', i);

        el.addEventListener('click', cellClick.bind(this, i));
        el.addEventListener('contextmenu', cellRightClick.bind(this, i));

        let touchTimer;
        function touchstart(e) {
            e.preventDefault();
            if (!touchTimer) {
                touchTimer = setTimeout(cellRightClick.bind(this, i), 250);
            }
        }
        function touchend() {
            if (touchTimer) {
                clearTimeout(touchTimer);
                touchTimer = null;
                cellClick(i);
            }
        }

        objArr.push(el);
    });

    field.innerHTML = '';
    field.style.setProperty('--cols', cols);
    objArr.forEach(el => field.appendChild(el));
}

function cellRightClick(ndx) {
    event.preventDefault();
    const elM = fieldModel.cells[ndx];
    if (elM.open) { return }

    const el = field.querySelector(`[ndx="${ndx}"]`);
    el.classList.toggle('flag');
    elM.flag = !elM.flag;
    elM.flag
        ? fieldModel.flags++
        : fieldModel.flags--;
    document.querySelector('#field-info #flags-number').textContent = fieldModel.flags;
}

function cellClick(ndx) {
    const elM = fieldModel.cells[ndx];
    if (elM.open || elM.flag) return

    const el = field.querySelector(`[ndx="${ndx}"]`);
    let bmbsQ = 0;

    el.classList.add('open');
    elM.open = true;
    fieldModel.cellsOpen++;

    if (elM.bomb) {
        el.classList.add('bomb');
        gameover(ndx);
        return
    }

    let surArr = findSurrounds(ndx);
    surArr.forEach(x => {
        fieldModel.cells[x].bomb && bmbsQ++;
    });

    if (bmbsQ) {
        el.classList.add(`bombs-q${bmbsQ}`);
        el.textContent = bmbsQ;
    } else {
        surArr.forEach(x => cellClick(x));
    }

    if (fieldModel.cellsOpen === (fieldModel.cellsNumber - fieldModel.bombs)) {
        gameover(undefined, true);
        return
    }
}
/**
 * @returns {number[]}  Surrounding cell indexes
 * @param {number|number[]} ndx     Initial cell index or array of indexes
 * @param {boolean}         second  If level two surroundings needed
 */
 function findSurrounds(ndx, second = false) {
    const width = fieldModel.cols;
    let surArr = [],
        surFirstArr = [],
        surSecondArr = [];

    function finder(ndx) {
        if (Array.isArray(ndx)) { ndx = [...ndx] }
        else { ndx = [ndx] }

        ndx.forEach(x => {
            const
                notTop = x > width - 1,
                notBottom = x < (fieldModel.cellsNumber - width),
                notLeft = (x % width) != 0,
                notRight = (x % width) != (width - 1);

            if (notTop) {
                surArr.push(x - width);
                notLeft && surArr.push(x - width - 1);
                notRight && surArr.push(x - width + 1);
            }
            notLeft && surArr.push(x - 1);
            notRight && surArr.push(x + 1);
            if (notBottom) {
                surArr.push(x + width);
                notLeft && surArr.push(x + width - 1);
                notRight && surArr.push(x + width + 1);
            }
        });
    }

    finder(ndx);
    if (!second) {
        return surArr
    } else {
        surFirstArr = [...surArr, ndx];
        finder(surFirstArr);
        surSecondArr = [...new Set(surArr.filter(x => !surFirstArr.includes(x)))];
        return surSecondArr;
    }

}

function gameover(ndx = undefined, win = false) {
    field.classList.add('gameover');

    const bombMArr = fieldModel.cells.map((e, i) => {
        return (!e.open && e.bomb) ? i : ''
    }).filter(String);
    const badGuessMArr = fieldModel.cells.map((e, i) => {
        return (!e.open && e.flag && !e.bomb) ? i : ''
    }).filter(String);

    bombMArr.forEach(x => {
        const el = field.querySelector(`[ndx="${x}"]`);
        el.classList.add('bomb');
    });
    badGuessMArr.forEach(x => {
        const el = field.querySelector(`[ndx="${x}"]`);
        el.classList.add('wrong');
    });

    if (win) {
        field.classList.add('win');
        return
    }

    // Animate explosion
    const el = field.querySelector(`[ndx="${ndx}"]`);
    el.classList.add('boom0');
    const surFirstArr = findSurrounds(ndx);
    const surSecondtArr = findSurrounds(ndx, true);
    surFirstArr.forEach(x => {
        const el = field.querySelector(`[ndx="${x}"]`);
        el.classList.add('boom1');
    });
    surSecondtArr.forEach(x => {
        const el = field.querySelector(`[ndx="${x}"]`);
        el.classList.add('boom2');
    });
}