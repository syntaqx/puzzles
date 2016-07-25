// https://www.codewars.com/kata/576a29ab726f4bba4b000bb1
// https://www.codewars.com/kata/what-is-my-name-score-number-1

function nameScore(name) {
  var points = [];
  var resp = {};
  var score = 0;

  Object.keys(alpha).forEach(function (group) {
     group.split('').forEach(function(letter) {
       points[letter] = alpha[group];
     });
  });

  name.replace(/\s+/g, '').toUpperCase().split('').forEach(function (letter) {
    if (points[letter]) {
      score += points[letter];
    }
  });

  resp[name] = score
  return resp;
}
