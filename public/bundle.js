
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function () {
  'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ":root {\n  --cols: 9;\n  --cell-size: 24px;\n  --field-bg: #d4d4d4;\n  --field-bdc: #aaa;\n  --cell-bg-h: #c4c4c4;\n  --cell-bdc: #fff;\n}\nh1 {\n  color: #f00;\n}\nlabel + label {\n  margin-bottom: 0.5em;\n}\n#field-info {\n  margin-bottom: 0.25em;\n  line-height: 1;\n  color: #444;\n}\n#field-controls {\n  margin: 0.5em 0;\n}\n#field-controls #reset-btn {\n  margin-bottom: 1em;\n}\n#field-controls .settings .settings-section {\n  margin-bottom: 1em;\n}\n#field {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  background-color: var(--field-bg);\n  border: 1px solid var(--field-bdc);\n  border-top-width: 0;\n  border-left-width: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: calc(var(--cols) * var(--cell-size));\n}\n#field.gameover {\n  pointer-events: none;\n  --field-bg: #c4c4c4;\n  --cell-bdc: #d6d6d6;\n}\n#field.gameover.win {\n  --field-bg: #d8eccb;\n  --cell-bdc: #f1ffe8;\n}\n#field .cell {\n  position: relative;\n  display: flex;\n  width: var(--cell-size);\n  height: var(--cell-size);\n  font-size: 14px;\n  line-height: 1;\n  align-items: center;\n  justify-content: center;\n  border: 3px outset var(--cell-bdc);\n  box-sizing: border-box;\n  cursor: pointer;\n  font-weight: bold;\n  -webkit-animation-duration: 0.35s;\n          animation-duration: 0.35s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n#field .cell:not(.open):hover {\n  background-color: var(--cell-bg-h);\n}\n#field .cell.open {\n  border: 1px solid var(--field-bdc);\n  border-bottom-width: 0;\n  border-right-width: 0;\n}\n#field .cell:after {\n  position: absolute;\n  display: flex;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  align-items: center;\n  justify-content: center;\n  background-size: 12px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n#field .cell.flag:after {\n  content: '';\n  background-image: url(\"flag.svg\");\n}\n#field .cell.bomb:after {\n  content: '';\n  background-image: url(\"mine.svg\");\n}\n#field .cell.bomb.flag:after {\n  background-color: rgba(15,127,18,0.251);\n}\n#field .cell.wrong:after {\n  content: '';\n  background-image: url(\"no_mine.svg\");\n  background-color: rgba(217,71,71,0.251);\n}\n#field .cell[class*=\"bombs-num\"] {\n  color: #7e0308;\n}\n#field .cell.bombs-num1 {\n  color: #0b24fb;\n}\n#field .cell.bombs-num2 {\n  color: #0f7f12;\n}\n#field .cell.bombs-num3 {\n  color: #fc0d1b;\n}\n#field .cell.bombs-num4 {\n  color: #020c7e;\n}\n#field .cell.flash {\n  -webkit-animation-name: flash;\n          animation-name: flash;\n}\n#field .cell.boom0 {\n  -webkit-animation-name: boom0;\n          animation-name: boom0;\n}\n#field .cell.boom1 {\n  -webkit-animation-name: boom1;\n          animation-name: boom1;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n#field .cell.boom2 {\n  -webkit-animation-name: boom2;\n          animation-name: boom2;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\n@-webkit-keyframes flash {\n  0% {\n    background-color: #e2e2e2;\n  }\n}\n@keyframes flash {\n  0% {\n    background-color: #e2e2e2;\n  }\n}\n@-webkit-keyframes boom0 {\n  0% {\n    background-color: #d94747;\n  }\n  99% {\n    background-color: none;\n  }\n  100% {\n    background-color: rgba(217,71,71,0.502);\n  }\n}\n@keyframes boom0 {\n  0% {\n    background-color: #d94747;\n  }\n  99% {\n    background-color: none;\n  }\n  100% {\n    background-color: rgba(217,71,71,0.502);\n  }\n}\n@-webkit-keyframes boom1 {\n  0% {\n    background-color: rgba(198,113,62,0.82);\n  }\n}\n@keyframes boom1 {\n  0% {\n    background-color: rgba(198,113,62,0.82);\n  }\n}\n@-webkit-keyframes boom2 {\n  0% {\n    background-color: rgba(240,180,81,0.467);\n  }\n}\n@keyframes boom2 {\n  0% {\n    background-color: rgba(240,180,81,0.467);\n  }\n}\n";
  styleInject(css_248z);

  const field = document.querySelector('#field');
  const fieldInfo = document.querySelector('#field-info');

  let fieldModel = {};

  function buildField(cols = 9, rows = 9, bmbs = 10) {
      cols = ~~cols;
      rows = ~~rows;
      bmbs = ~~bmbs;
      fieldModel = {};
      field.innerHTML = '';
      field.classList.remove('gameover', 'win');

      fieldInfo.innerHTML = `${cols}×${rows}, <span id="flags-number">0</span>/${bmbs} mines`;

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
      };

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
          // el.textContent = i;

          el.addEventListener('click', cellClick.bind(this, i));
          el.addEventListener('contextmenu', cellRightClick.bind(this, i));
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

      el.classList.add(`bombs-num${bmbsQ}`, 'open');
      elM.open = true;
      fieldModel.cellsOpen++;

      el.classList.add('flash');
      setTimeout(() => {
          el.classList.remove('flash');
      }, 500);

      if (fieldModel.cellsOpen === (fieldModel.cellsNumber - fieldModel.bombs)) {
          gameover(undefined, true);
          return
      }

      if (elM.bomb) {
          el.classList.add('bomb');
          gameover(ndx);
          return
      }

      let surArr = findSurrounds(ndx);

      surArr.forEach(x => {
          fieldModel.cells[x].bomb && bmbsQ++;

          const elx = field.querySelector(`[ndx="${x}"]`);
          setTimeout(() => {
              elx.classList.add('flash');
              setTimeout(() => {
                  elx.classList.remove('flash');
              }, 400);
          }, 100);
      });

      el.classList.add(`bombs-num${bmbsQ}`, 'open');
      elM.open = true;

      if (bmbsQ) {
          el.textContent = bmbsQ;
      } else {
          surArr.forEach(x => cellClick(x));
      }
  }

  function findSurrounds(ndx, second = false) {
      const width = fieldModel.cols;
      let surArr = [],
          surFirstArr = [],
          surSecondArr = [];

      function finder(ndx) {
          if (Array.isArray(ndx)) { ndx = [...ndx]; }
          else { ndx = [ndx]; }

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

  let cols = 9,
      rows = 9,
      bmbs = 10;

  document.querySelector('#reset-btn').addEventListener('click', () => {
      buildField(cols, rows, bmbs);
  });
  document.querySelector('#settings-grade-1').click();
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

}());
//# sourceMappingURL=bundle.js.map
