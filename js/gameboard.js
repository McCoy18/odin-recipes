const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Gameboard = (() => {
  let board = Array(9).fill("");

  const reset = () => {
    board = Array(9).fill("");
  };

  const placeMark = (index, mark) => {
    if (!Number.isInteger(index) || index < 0 || index >= board.length || board[index]) {
      return false;
    }

    board[index] = mark;
    return true;
  };

  const getBoard = () => [...board];

  const getWinningLine = () =>
    winningLines.find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]) ?? null;

  const isFull = () => board.every(Boolean);

  return { reset, placeMark, getBoard, getWinningLine, isFull };
})();

export default Gameboard;
