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
    for (let i = 0; i < gameCells.length; i += boardSize) {
      if (
        gameCells[i].status === 'circle'
        && gameCells[i + 1].status === 'circle'
        && gameCells[i + 2].status === 'circle'
      ) {
        setTimeout(() => {
          alert('horisontal circles win');
        }, 100);
      } else if (
        gameCells[i].status === 'cross'
        && gameCells[i + 1].status === 'cross'
        && gameCells[i + 2].status === 'cross'
      ) {
        setTimeout(() => {
          alert('horisontal crosses win');
        }, 100);
      }
    }
    for (let j = 0; j < boardSize; j++) {
      if (
        gameCells[j].status === 'circle'
        && gameCells[j + 3].status === 'circle'
        && gameCells[j + 6].status === 'circle'
      ) {
        setTimeout(() => {
          alert('vertical circles win');
        }, 100);
      } else if (
        gameCells[j].status === 'cross'
        && gameCells[j + 3].status === 'cross'
        && gameCells[j + 6].status === 'cross'
      ) {
        setTimeout(() => {
          alert('vertical crosses win');
        }, 100);
      }
    }
    if (
      gameCells[0].status === 'circle'
      && gameCells[4].status === 'circle'
      && gameCells[8].status === 'circle'
    ) {
      setTimeout(() => {
        alert('diagonal-main circles win');
      }, 100);
    } else if (
      gameCells[2].status === 'circle'
      && gameCells[4].status === 'circle'
      && gameCells[6].status === 'circle'
    ) {
      setTimeout(() => {
        alert('diagonal-reverse circles win');
      }, 100);
    } else if (
      gameCells[0].status === 'cross'
      && gameCells[4].status === 'cross'
      && gameCells[8].status === 'cross'
    ) {
      setTimeout(() => {
        alert('diagonal-reverse crosses win');
      }, 100);
    } else if (
      gameCells[2].status === 'cross'
      && gameCells[4].status === 'cross'
      && gameCells[6].status === 'cross'
    ) {
      setTimeout(() => {
        alert('diagonal-reverse crosses win');
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
      winMessage(gameCells);
    }
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
    gameCells.forEach((element) => {
      element.status = false;
    });
  });
}());
