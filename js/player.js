const createPlayer = (name, mark) => ({
  name: name.trim() || `Player ${mark}`,
  mark,
});

export default createPlayer;
