// https://www.codewars.com/kata/base64-encoding
// https://www.codewars.com/kata/5270f22f862516c686000161

Object.assign(String.prototype, {

  base64Chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  fromBase64: function () {
    var len = this.length;
    var result = '';
    for (var i=0; i<len; i+=4){
      var a = this.base64Chars.indexOf(this[i]);
      var b = this.base64Chars.indexOf(this[i+1]);
      var c = this.base64Chars.indexOf(this[i+2]) || 0;
      var d = this.base64Chars.indexOf(this[i+3]) || 0;
      result += String.fromCharCode((a<<2) | ((b&0x30)>>4));
      if (this.slice(i+2)=='==') continue;
      result += String.fromCharCode(((b&0xF)<<4) | ((c&0x3C)>>2));
      if (this.slice(i+3)=='=') continue;
      result += String.fromCharCode(((c&0x03)<<6) | d);
    }
    return result.replace(/\\u0000+/, '');
  },

  toBase64: function () {
    var len = this.length;
    var result = '';
    for (var i=0; i<len; i+=3){
      var a = this.charCodeAt(i);
      var b = this.charCodeAt(i+1) || 0;
      var c = this.charCodeAt(i+2) || 0;
      result += this.base64Chars[a>>2];
      result += this.base64Chars[((a&0x03)<<4) | ((b&0xF0)>>4)];
      result += this.base64Chars[((b&0x0F)<<2) | ((c&0xC0)>>6)];
      result += this.base64Chars[c&0x3F];
    }
    return result.replace(/A+$/, function(match){
      return Array(match.length+1).join('='); // Assume ASCII
    });
  }

});
