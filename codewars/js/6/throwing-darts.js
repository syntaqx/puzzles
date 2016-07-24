// https://www.codewars.com/kata/throwing-darts
// https://www.codewars.com/kata/525dfedb5b62f6954d000006

function scoreThrows(radiuses){
  var result = radiuses.reduce(function (p, c) {
    return p + (c < 5 ? 10 : c > 10 ? 0 : 5);
  }, 0);

  return result / radiuses.length === 10 ? result + 100 : result;
}
