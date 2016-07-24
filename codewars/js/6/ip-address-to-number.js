// https://www.codewars.com/kata/ip-address-to-number
// https://www.codewars.com/kata/541a354c39c5efa5fa001372

function ipToNum(ip) {
  var d = ip.split('.');
  return ((((((+d[0])*256)+(+d[1]))*256)+(+d[2]))*256)+(+d[3]);
 }

function numToIp(num) {
  var d = num%256;
  for (var i = 3; i > 0; i--) {
    num = Math.floor(num/256);
    d = num%256 + '.' + d;
  }

  return d;
}
