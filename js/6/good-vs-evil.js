// https://www.codewars.com/kata/good-vs-evil
// https://www.codewars.com/kata/52761ee4cffbc69732000738

function goodVsEvil(good, evil){
  var goodScore = 0
  var evilScore = 0

  good = good.split(' ');
  evil = evil.split(' ');

  goodScore += good[0] * 1;  // Hobbits
  goodScore += good[1] * 2;  // Men
  goodScore += good[2] * 3;  // Elves
  goodScore += good[3] * 3;  // Dwarves
  goodScore += good[4] * 4;  // Eagles
  goodScore += good[5] * 10; // Wizards

  evilScore += evil[0] * 1;  // Orcs
  evilScore += evil[1] * 2;  // Men
  evilScore += evil[2] * 2;  // Wargs
  evilScore += evil[3] * 2;  // Golbins
  evilScore += evil[4] * 3;  // Uruk Hai
  evilScore += evil[5] * 5;  // Trolls
  evilScore += evil[6] * 10; // Wizards

  if (goodScore > evilScore) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (goodScore < evilScore) {
    return 'Battle Result: Evil eradicates all trace of Good';
  }

  return 'Battle Result: No victor on this battle field';
}
