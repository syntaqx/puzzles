// https://www.codewars.com/kata/does-my-number-look-big-in-this
// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic( value ) {
  return value === function () {
    var total = 0

    String(value).split('').forEach(function (element, index, array) {
      total += Math.pow(element, String(value).length)
    })

    return total
  }.call()
}
