// https://www.codewars.com/kata/battleship-field-validator
// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7

var discoverDirection = function(row, column, field, previousDirection) {
  var direction, i, j, k, l;
  if (previousDirection == null) {
    previousDirection = false;
  }

  for (i = k = -1; k <= 1; i = ++k) {
    for (j = l = -1; l <= 1; j = ++l) {
      if (!((i === j && j === 0)) && row + i >= 0 && column + j >= 0 && field[row + i][column + j]) {
        if (!(previousDirection && i === previousDirection[0] * -1 && j === previousDirection[1] * -1)) {
          if (direction || (i !== 0 && j !== 0)) {
            return false;
          }

          direction = [i, j];
        }
      }
    }
  }

  return direction;
};

var discoverShip = function(irow, icolumn, field) {
  var direction, size;

  while (1) {
    direction = discoverDirection(irow, icolumn, field, direction);
    size = (size || 0) + 1;
    field[irow][icolumn] = 2;

    if (direction === false) {
      return false;
    }

    if (!direction) {
      break;
    }

    irow += direction[0];
    icolumn += direction[1];
  }

  return size;
};

var validateBattlefield = function(field) {
  var column, icolumn, irow, k, l, len, len1, ret, row;
  var ships = {};

  for (irow = k = 0, len = field.length; k < len; irow = ++k) {
    row = field[irow];
    for (icolumn = l = 0, len1 = row.length; l < len1; icolumn = ++l) {
      column = row[icolumn];

      if (!(column === 1)) {
        continue;
      }

      ret = discoverShip(irow, icolumn, field);

      if (ret === false) {
        return false;
      }

      ships[ret] = (ships[ret] || 0) + 1;
    }
  }

  return ships[1] === 4 && ships[2] === 3 && ships[3] === 2 && ships[4] === 1;
};
