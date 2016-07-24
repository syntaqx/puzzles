// https://www.codewars.com/kata/permutations
// https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function permutations(input) {
  var permArr = [],
      usedChars = []

  input = input.split('')

  function main() {
    for (var i = 0; i < input.length; i++) {
      var ch = input.splice(i, 1)[0]

      usedChars.push(ch)

      if (input.length == 0) {
        permArr.push(usedChars.slice())
      }

      main()
      input.splice(i, 0, ch)
      usedChars.pop()
    }

    return permArr
  }

  var perms = main()

  perms.forEach(function (value, index) {
    perms[index] = value.join('')
  })

  perms = perms.filter(function (e, i, arr) {
    return arr.lastIndexOf(e) === i;
  })

  return perms
}
