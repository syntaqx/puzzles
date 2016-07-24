// https://www.codewars.com/kata/regex-password-validation
// https://www.codewars.com/kata/52e1476c8147a7547a000811

function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/.test(password);
}
