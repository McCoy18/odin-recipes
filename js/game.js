import Gameboard from "./gameboard.js";
import createPlayer from "./player.js";

const Game = (() => {
  let players = [];
  let activePlayerIndex = 0;
  let gameOver = true;

  const start = (playerXName, playerOName) => {
    players = [createPlayer(playerXName, "X"), createPlayer(playerOName, "O")];
    activePlayerIndex = 0;
    gameOver = false;
    Gameboard.reset();
  };

  const playRound = (index) => {
    if (gameOver || !Gameboard.placeMark(index, players[activePlayerIndex].mark)) {
      return { accepted: false };
    }

    const winningLine = Gameboard.getWinningLine();
    if (winningLine) {
      gameOver = true;
      return {
        accepted: true,
        state: "won",
        player: players[activePlayerIndex],
        winningLine,
      };
    }

    if (Gameboard.isFull()) {
      gameOver = true;
      return { accepted: true, state: "tie" };
    }

    activePlayerIndex = (activePlayerIndex + 1) % players.length;
    return { accepted: true, state: "playing" };
  };

  const getCurrentPlayer = () => players[activePlayerIndex];
  const isGameOver = () => gameOver;

  return { start, playRound, getCurrentPlayer, isGameOver };
})();

export default Game;
