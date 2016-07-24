// https://www.codewars.com/kata/trim-a-string
// https://www.codewars.com/kata/526e8de0512511429e000006

String.prototype.trim = function () {
  return this.replace(/^[\s\xA0]+|[\s\xA0]+$/g, '');
};
