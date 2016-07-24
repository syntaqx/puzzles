// https://www.codewars.com/kata/befunge-interpreter
// https://www.codewars.com/kata/526c7b931666d07889000a3c

function interpret(code) {
  var array = code.split('\n').map(function(line) {
    return line.split('');
  });

  var i  = 0,
      j  = 0,
      di = 0,
      dj = 1;

  var stack = [];
  var output = "";
  var stringMode = false;
  var halt = false;

  while (!halt) {
    var instr = array[i][j];

    if (stringMode && instr !== '"') {
      stack.push(instr.charCodeAt(0));
    } else if (/\d/.test(instr)) {
      stack.push(parseInt(instr));
    } else if (instr === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (instr === '-') {
      stack.push(-stack.pop() + stack.pop());
    } else if (instr === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (instr === '/') {
      stack.push(1 / (stack.pop() || Infinity) * stack.pop());
    } else if (instr === '%') {
      var a = stack.pop();
      var b = stack.pop();
      stack.push(b % (a || Infinity));
    } else if (instr === '!') {
      stack.push(stack.pop() ? 0 : 1);
    } else if (instr === '`') {
      stack.push(stack.pop() <= stack.pop() ? 1 : 0);
    } else if (instr === '>') {
      di = 0, dj = 1;
    } else if (instr === '<') {
      di = 0, dj = -1;
    } else if (instr === 'v') {
      di = 1, dj = 0;
    } else if (instr === '^') {
      di = -1, dj = 0;
    } else if (instr === '?') {
      var direction = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
      ][(Math.random() * 4) | 0];
      di = direction[0];
      dj = direction[1];
    } else if (instr === '_') {
      di = 0, dj = stack.pop() ? -1 : 1;
    } else if (instr === '|') {
      dj = 0, di = stack.pop() ? -1 : 1;
    } else if (instr === '"') {
      stringMode = !stringMode;
    } else if (instr === ':') {
      stack.push(stack[stack.length - 1] || 0);
    } else if (instr === '\\') {
      var a = stack.pop();
      var b = stack.pop();
      stack.push(a);
      stack.push(b || 0);
    } else if (instr === '$') {
      stack.pop();
    } else if (instr === '.') {
      output = output + stack.pop();
    } else if (instr === ',') {
      output = output + String.fromCharCode(stack.pop());
    } else if (instr === '#') {
      i += di, j += dj;
    } else if (instr === 'p') {
      array[stack.pop()][stack.pop()] = String.fromCharCode(stack.pop());
    } else if (instr === 'g') {
      stack.push(array[stack.pop()][stack.pop()].charCodeAt(0));
    } else if (instr === '@') {
      halt = true;
    }

    i += di;
    j += dj;
  }

  return output;
}
