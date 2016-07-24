// https://www.codewars.com/kata/human-readable-time
// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
  var hours   = Math.floor(seconds / 3600),
      minutes = Math.floor((seconds - (hours * 3600)) / 60),
      seconds = seconds - (hours * 3600) - (minutes * 60);

  if (hours   < 10) { hours   = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }

  return hours + ':' + minutes + ':' + seconds
}
