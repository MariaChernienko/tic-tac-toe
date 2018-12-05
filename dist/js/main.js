(function anon() {
  const boardSize = 3;
  const gameCells = [];
  const gameField = document.querySelector('.game');

  for (let i = 0; i < boardSize * boardSize; i++) {
    const newCellItem = {
      number: i + 1,
      status: false,
    };
    gameCells.push(newCellItem);
  }

  const createBoard = (gameCells) => {
    gameCells.forEach((element) => {
      const gameCell = document.createElement('li');
      gameCell.textContent = element.number;
      gameCell.classList.add('game__cell');
      gameField.appendChild(gameCell);
    });
  };
  const putCircle = (target) => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    target.appendChild(circle);
  };
  const putCross = (target) => {
    const cross = document.createElement('div');
    cross.classList.add('cross');
    target.appendChild(cross);
  };

  const winMessage = (gameCells) => {
    let k = 0;
    let l = 0;

    for (let i = 0; i < boardSize; i++) {
      for (let j = i; j < gameCells.length; j += boardSize) {
        if (gameCells[j].status === 'circle') {
          k++;
        }
      }
    }
    for (let i = 0; i < boardSize; i++) {
      for (let j = i; j < gameCells.length; j += boardSize) {
        if (gameCells[j].status === 'cross') {
          l++;
        }
      }
    }

    if (k === boardSize) {
      setTimeout(() => {
        alert("circle wins");
      }, 100);
    } else if (l === boardSize) {
      setTimeout(() => {
        alert("cross wins");
      }, 100);
    }
  };

  createBoard(gameCells);
  
  let step = 0;
  gameField.addEventListener('click', (e) => {
    const target = e.target;
    const count = target.textContent;
    if (target.innerHTML.length === 1) {
      if (step % 2 === 0) {
        putCross(target);
        gameCells[count - 1].status = 'cross';
      } else {
        putCircle(target);
        gameCells[count - 1].status = 'circle';
      }
      step++;
    }
  
    winMessage(gameCells);
  });

  document.querySelector('button').addEventListener('click', () => {
    const allCircles = document.querySelectorAll('.circle');
    const allCross = document.querySelectorAll('.cross');
    allCircles.forEach((element) => {
      element.remove();
    });
    allCross.forEach((element) => {
      element.remove();
    });
  });
}());
