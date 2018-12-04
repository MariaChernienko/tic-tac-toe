(function anon(){
  console.log("Hello.tic-tac-toe");
  let boardSize = 9;
  let gameCells = [];

  for (let i = 0; i < boardSize; i++) {
    const newCellItem = {
      text : i + 1,
      status : false,
    };
    gameCells.push(newCellItem);
  }
  
  const render = (gameCells) => {
    const gameField = document.querySelector('.game');
    gameField.innerHTML = '';
    gameCells.forEach(element => {
      const gameCell = document.createElement('li');
      gameCell.textContent = element.text;
      gameCell.classList.add('game__cell');
      gameField.appendChild(gameCell);
      if (element.status === 'circle') {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        gameCell.appendChild(circle);
      } 
      else if (element.status == 'cross') {
        const cross = document.createElement('div');
        cross.classList.add('cross');
        gameCell.appendChild(cross);
      }
    });
  }

  render(gameCells);

  const allCells = document.querySelectorAll('.game__cell');
  allCells.forEach(element => {
    element.addEventListener('click', (e) => {
      let item = e.target.textContent;
      console.log(item);
      gameCells[item-1].status = 'circle';
      console.log(gameCells);
      render(gameCells);  //?
    });
  });
  



})();