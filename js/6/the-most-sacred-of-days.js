// https://www.codewars.com/kata/the-most-sacred-of-days
// https://www.codewars.com/kata/52dd673c80db65531e000488

function blackFriday(year) {
  var day = 1, thursdays = 0, date

  while (thursdays < 4) {
    date = new Date(year, 10, day);
    if (date.getDay() == 4) thursdays++
    day++
  }

  return date.getDate() + 1;
}
