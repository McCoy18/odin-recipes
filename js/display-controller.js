import Game from "./game.js";
import Gameboard from "./gameboard.js";

const displayController = (() => {
  const boardElement = document.querySelector("#gameboard");
  const statusElement = document.querySelector("#game-status");
  const form = document.querySelector("#player-form");
  const playerXInput = document.querySelector("#player-x");
  const playerOInput = document.querySelector("#player-o");

  const render = (winningLine = []) => {
    const board = Gameboard.getBoard();
    boardElement.replaceChildren();

    board.forEach((mark, index) => {
      const cell = document.createElement("button");
      cell.className = "cell";
      cell.type = "button";
      cell.dataset.index = index;
      cell.textContent = mark;
      cell.disabled = Boolean(mark) || Game.isGameOver();
      cell.setAttribute("aria-label", mark ? `${mark} at position ${index + 1}` : `Empty position ${index + 1}`);

      if (winningLine.includes(index)) cell.classList.add("winner");
      boardElement.append(cell);
    });
  };

  const updateStatus = (message) => {
    statusElement.textContent = message;
  };

  const startGame = () => {
    Game.start(playerXInput.value, playerOInput.value);
    updateStatus(`${Game.getCurrentPlayer().name}'s turn (${Game.getCurrentPlayer().mark})`);
    render();
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    startGame();
  });

  boardElement.addEventListener("click", (event) => {
    const cell = event.target.closest(".cell");
    if (!cell) return;

    const result = Game.playRound(Number(cell.dataset.index));
    if (!result.accepted) return;

    if (result.state === "won") {
      updateStatus(`${result.player.name} wins!`);
    } else if (result.state === "tie") {
      updateStatus("It's a tie!");
    } else {
      const player = Game.getCurrentPlayer();
      updateStatus(`${player.name}'s turn (${player.mark})`);
    }

    render(result.winningLine ?? []);
  });

  render();
})();

export default displayController;
