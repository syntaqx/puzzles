// https://www.codewars.com/kata/create-phone-number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers){
  return numbers.join().replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}
