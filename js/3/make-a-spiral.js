// https://www.codewars.com/kata/make-a-spiral
// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6

var spiralize = function(size){
  var currDir = 1;
  var currPos = [1, 1];
  var mov = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  var look = [[-2, 0, 0, 0], [0, 2, 0, 0], [0, 0, 2, 0], [0, 0, 0, -2]];
  var res$ = [];

  var i$, to$, lresult$, j$, to1$;
  for (i$ = 0, to$ = size + 2; i$ < to$; ++i$) {
    lresult$ = [];
    for (j$ = 0, to1$ = size + 2; j$ < to1$; ++j$) {
      lresult$.push(0);
    }
    res$.push(lresult$);
  }

  var matrix = res$;
  var activateCurrentCell = function(){
    matrix[currPos[0]][currPos[1]] = 1;
  };

  var nextPosition = function(){
    currPos[1] += mov[currDir][1];
    currPos[0] += mov[currDir][0];
  };

  var nextDirection = function(){
    if (++currDir === 4) {
      currDir = 0;
    }
  };

  var lookAhead = function(){
    if (matrix[currPos[0] + look[currDir][0]][currPos[1]] === 0 && matrix[currPos[0] + look[currDir][2]][currPos[1]] === 0 && matrix[currPos[0]][currPos[1] + look[currDir][1]] === 0 && matrix[currPos[0]][currPos[1] + look[currDir][3]] === 0) {
      return true;
    } else {
      return false;
    }
  };

  var i;
  for (;;) {
    for (i$ = 0, to$ = size - 1; i$ < to$; ++i$) {
      i = i$;
      if (lookAhead()) {
        activateCurrentCell();
      } else {
        break;
      }
      nextPosition();
    }
    nextDirection();
    if (i <= 1) {
      activateCurrentCell();
      break;
    }
  }

  matrix.pop();
  matrix.shift();

  var len$, row;
  for (i$ = 0, len$ = matrix.length; i$ < len$; ++i$) {
    row = matrix[i$];
    row.pop();
    row.shift();
  }

  return matrix;
};
