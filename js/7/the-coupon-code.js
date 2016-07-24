// https://www.codewars.com/kata/the-coupon-code
// https://www.codewars.com/kata/539de388a540db7fec000642

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) return false;
  if (new Date(currentDate) > new Date(expirationDate)) return false;
  return true;
}
