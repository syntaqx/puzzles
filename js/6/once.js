// https://www.codewars.com/kata/once
// https://www.codewars.com/kata/5307ff5b588fe6d7000000a5

function once (fn) {
  var executed = false;

  return function () {
    if (executed === false) {
      executed = true;
      return fn.apply(this, arguments);
    }
  };
}
