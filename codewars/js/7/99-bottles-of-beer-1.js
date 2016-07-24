// https://www.codewars.com/kata/99-bottles-of-beer-1
// https://www.codewars.com/kata/52a723508a4d96c6c90005ba

function sing() {
  var lyrics  = [];
  var count   = 99;
  var bottles = function (cnt) { return cnt > 1 ? ' bottles' : ' bottle'; }

  while (count > 0) {
    lyrics.push(count + bottles(count) + ' of beer on the wall, ' + count + bottles(count) + ' of beer.')

    count--

    if (count > 0) {
      lyrics.push('Take one down and pass it around, ' + count + bottles(count) + ' of beer on the wall.')
    } else {
      lyrics.push('Take one down and pass it around, no more bottles of beer on the wall.')
      lyrics.push('No more bottles of beer on the wall, no more bottles of beer.')
      lyrics.push('Go to the store and buy some more, 99 bottles of beer on the wall.')
    }
  }

  return lyrics
}
