(function anon() {
  let boardSize = 9;
  let gameCells = [];
  const gameField = document.querySelector(".game");

  for (let i = 0; i < boardSize; i++) {
    const newCellItem = {
      number: i + 1,
      status: false
    };
    gameCells.push(newCellItem);
  }

  const createBoard = gameCells => {
    gameCells.forEach(element => {
      const gameCell = document.createElement("li");
      gameCell.textContent = element.number;
      gameCell.classList.add("game__cell");
      gameField.appendChild(gameCell);
    });
  };
  const putCircle = target => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    target.appendChild(circle);
  };
  const putCross = target => {
    const cross = document.createElement("div");
    cross.classList.add("cross");
    target.appendChild(cross);
  };

  const winMessage = gameCells => {
    if (
      gameCells[0].status == "circle" &&
      gameCells[3].status == "circle" &&
      gameCells[6].status == "circle"
    ) {
      alert("circle wins");
    } else if (
      gameCells[1].status == "circle" &&
      gameCells[4].status == "circle" &&
      gameCells[7].status == "circle"
    ) {
      alert("circle wins");
    } else if (
      gameCells[2].status == "circle" &&
      gameCells[5].status == "circle" &&
      gameCells[8].status == "circle"
    ) {
      alert("circle wins");
    } else if (
      gameCells[0].status == "circle" &&
      gameCells[1].status == "circle" &&
      gameCells[2].status == "circle"
    ) {
      alert("circle wins");
    } else if (
      gameCells[3].status == "circle" &&
      gameCells[4].status == "circle" &&
      gameCells[5].status == "circle"
    ) {
      alert("circle wins");
    } else if (
      gameCells[6].status == "circle" &&
      gameCells[7].status == "circle" &&
      gameCells[8].status == "circle"
    ) {
      alert("circle wins");
    } else if (
      gameCells[0].status == "circle" &&
      gameCells[4].status == "circle" &&
      gameCells[8].status == "circle"
    ) {
      alert("circle wins");
    } else if (
      gameCells[2].status == "circle" &&
      gameCells[4].status == "circle" &&
      gameCells[6].status == "circle"
    ) {
      alert("circle wins");
    }

    if (
      gameCells[0].status == "cross" &&
      gameCells[3].status == "cross" &&
      gameCells[6].status == "cross"
    ) {
      alert("cross wins");
    } else if (
      gameCells[1].status == "cross" &&
      gameCells[4].status == "cross" &&
      gameCells[7].status == "cross"
    ) {
      alert("cross wins");
    } else if (
      gameCells[2].status == "cross" &&
      gameCells[5].status == "cross" &&
      gameCells[8].status == "cross"
    ) {
      alert("cross wins");
    } else if (
      gameCells[0].status == "cross" &&
      gameCells[1].status == "cross" &&
      gameCells[2].status == "cross"
    ) {
      alert("cross wins");
    } else if (
      gameCells[3].status == "cross" &&
      gameCells[4].status == "cross" &&
      gameCells[5].status == "cross"
    ) {
      alert("cross wins");
    } else if (
      gameCells[6].status == "cross" &&
      gameCells[7].status == "cross" &&
      gameCells[8].status == "cross"
    ) {
      alert("cross wins");
    } else if (
      gameCells[0].status == "cross" &&
      gameCells[4].status == "cross" &&
      gameCells[8].status == "cross"
    ) {
      alert("cross wins");
    } else if (
      gameCells[2].status == "cross" &&
      gameCells[4].status == "cross" &&
      gameCells[6].status == "cross"
    ) {
      alert("cross wins");
    }
  };

  createBoard(gameCells);

  let step = 0;
  gameField.addEventListener("click", e => {
    const target = e.target;
    const count = target.textContent;

    if (step % 2 == 0) {
      putCross(target);
      gameCells[count - 1].status = "cross";
    } else {
      putCircle(target);
      gameCells[count - 1].status = "circle";
    }
    step++;
    winMessage(gameCells);
  });

  document.querySelector("button").addEventListener("click", () => {
    const allCircles = document.querySelectorAll(".circle");
    const allCross = document.querySelectorAll(".cross");
    allCircles.forEach(element => {
      element.remove();
    });
    allCross.forEach(element => {
      element.remove();
    });
  });
})();
