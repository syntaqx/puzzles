// https://www.codewars.com/kata/sum-of-intervals
// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumIntervals(intervals) {
  var total = 0, i;

  intervals = intervals.sort(function (a, b) {
    return a[0] > b[0];
  });

  if (intervals.length > 1) {
    for (i = 1; i < intervals.length; i++) {
      if (intervals[i-1][0] <= intervals[i][0] && intervals[i][0] <= intervals[i - 1][1]) {
        if (intervals[i-1][1] < intervals[i][1]) {
          intervals[i-1][1] = intervals[i][1];
        }

        intervals.splice(i, 1);
        i--;
      }
    }
  }

  for (i = 0; i < intervals.length; i++) {
    total += intervals[i][1] - intervals[i][0];
  }

  return total;
}
