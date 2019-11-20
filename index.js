const goTurtle = (settings, moves) => {
  const { turtle } = settings;

  const initialStatus = checkResult(settings, turtle);
  if (initialStatus) return initialStatus;

  const finalStatus = doAction(settings, turtle, moves);
  if (finalStatus) return finalStatus;

  return 'Still in danger';
};

const checkResult = (settings, turtle) => {
  const { board, exit, mines } = settings;

  if (isOutOfBounds(board, turtle)) return 'Out of bounds';
  if (isSamePlace(turtle)(exit)) return 'Success';
  if (mines.filter(isSamePlace(turtle)).length) return 'Mine hit';

  return '';
};

const isOutOfBounds = (board, { x, y }) =>
  x < 1 || y < 1 || x > board.col || y > board.row;

const isSamePlace = (thing1) => (thing2) =>
  thing1.x === thing2.x && thing1.y === thing2.y;

const doAction = (settings, turtle, moves) => {
  const newTurtle = moves[0] === 'm' ? move(turtle) : rotate(turtle);
  const newMoves = moves.slice(1);

  const status = checkResult(settings, newTurtle);
  if (status || !newMoves.length) return status;

  return doAction(settings, newTurtle, newMoves);
};

const move = (turtle) => {
  const { x, y, direction } = turtle;
  switch (direction) {
    case 'north': return set(turtle, 'y', y - 1);
    case 'east': return set(turtle, 'x',  x + 1);
    case 'south': return set(turtle, 'y', y + 1);
    case 'west': return set(turtle, 'x', x - 1);
  }
};

const rotate = (turtle) => {
  switch (turtle.direction) {
    case 'north': return set(turtle, 'direction', 'east');
    case 'east': return set(turtle, 'direction', 'south');
    case 'south': return set(turtle, 'direction', 'west');
    case 'west': return set(turtle, 'direction', 'north');
  }
};

const set = (turtle, key, value) => Object.assign({}, turtle, { [key]:value });

// Init

document.getElementById('result').innerHTML = goTurtle(settings, moves);