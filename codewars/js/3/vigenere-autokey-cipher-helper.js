// https://www.codewars.com/kata/vigenere-autokey-cipher-helper
// https://www.codewars.com/kata/52d2e2be94d26fc622000735

function VigenèreAutokeyCipher(key, abc) {
  this.encode = function (str) {
    var out = '';
    var keyIndex = 0;

    str.split("").forEach(function(letter) {
      if (abc.indexOf(letter) === -1) {
        out += letter;
      } else {
        var shift = keyIndex < key.length ? key[keyIndex] : str[keyIndex - key.length];

        // if current char in decoded string is not in alphabet, jump to next char
        while (abc.indexOf(shift) === -1) {
          keyIndex++;
          shift = keyIndex < key.length ? key[keyIndex] : str[keyIndex - key.length];
        }
        out += abc[(abc.indexOf(letter) + abc.indexOf(shift)) % abc.length];
        keyIndex++;
      }
    });

    return out;
  };
  this.decode = function (str) {
    var out = '';
    var keyIndex = 0;

    str.split("").forEach(function(letter, index) {
      if (abc.indexOf(letter) === -1) {
        out += letter;
      } else {
        var shift = keyIndex < key.length ? key[keyIndex] : out[keyIndex - key.length];

        // if current char in decoded string is not in alphabet, jump to next char
        while (abc.indexOf(shift) === -1) {
          keyIndex++;
          shift = keyIndex < key.length ? key[keyIndex] : out[keyIndex - key.length];
        }
        out += abc[(abc.indexOf(letter) + abc.length - abc.indexOf(shift)) % abc.length];
        keyIndex++;
      }
    });

    return out;
  };
}
