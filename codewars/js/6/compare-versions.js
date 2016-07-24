// https://www.codewars.com/kata/compare-versions
// https://www.codewars.com/kata/53b138b3b987275b46000115

function compareVersions (left, right) {
  var a = left.split('.'),
  b = right.split('.')
  i = 0,
  len = Math.max(a.length, b.length);

  for (; i < len; i++) {
    if ((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
      return true;
    } else if ((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
      return false;
    }
  }

  return true;
}
