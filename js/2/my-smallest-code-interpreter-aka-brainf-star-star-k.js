// https://www.codewars.com/kata/my-smallest-code-interpreter-aka-brainf-star-star-k
// https://www.codewars.com/kata/526156943dfe7ce06200063e

function brainLuck (code, input) {
  var interpreter = new BrainLuck(code)
  return interpreter.execute(input)
}

function BrainLuck (code) {
  // data
  this.i = null
  this.data = null
  // output
  this.input = null
  this.output = null
  // source code
  this.c = null
  this.source = code

  // maps ['s to their ]'s
  this.blockOpeners = {}
  // maps ]'s back to their ['s
  this.blockClosers = {}
  // populates the block index maps
  this.getBlocks()
}

BrainLuck.prototype = new function () {
  this.getBlocks = function () {
    var code = this.source
    var i = 0
    var l = code.length
    var match, open
    var brackets = /\[|\]/g
    var stack = []
    while (i < code.length) {
      match = code.substring(i).search(brackets)
      if (match < 0)
        break

      match += i

      if (code[match] === '[') {
        stack.push(match)
      } else {
        open = stack.pop()
        this.blockOpeners[open] = match
        this.blockClosers[match] = open
      }

      i = match + 1
    }
    if (stack.length)
      throw 'Brackets mismatched!'
  }

  this.execute = function (input) {
    this.c = 0
    this.i = 0
    this.data = [0]
    this.output = ''
    this.input = input
    var source = this.source
    var l = source.length
    while (this.c < l) {
      this[source[this.c]]()
    }
    return this.output
  }

  // operations
  this['>'] = function () {
    this.i++
    if (this.i === this.data.length)
      this.data[this.i] = 0
    this.c++
  }

  this['<'] = function () {
    this.i--
    if (this.i < 0)
      this.i = 0
    this.c++
  }

  this['+'] = function () {
    this.data[this.i]++

    if (this.data[this.i] === 256)
      this.data[this.i] = 0
    this.c++
  }

  this['-'] = function () {
    this.data[this.i]--
    if (this.data[this.i] === -1)
      this.data[this.i] = 255
    this.c++
  }

  this['.'] = function () {
    this.output += String.fromCharCode(this.data[this.i])
    this.c++
  }

  this[','] = function () {
    if (!this.input.length)
      throw 'Input expected!'
    this.data[this.i] = this.input.charCodeAt(0)
    this.input = this.input.substring(1)
    this.c++
  }

  this['['] = function () {
    if (!this.data[this.i])
      this.c = this.blockOpeners[this.c] + 1
    else
      this.c++
  }

  this[']'] = function () {
    if (this.data[this.i])
      this.c = this.blockClosers[this.c] + 1
    else
      this.c++
  }
}
