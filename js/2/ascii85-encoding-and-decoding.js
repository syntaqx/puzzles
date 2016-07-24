// https://www.codewars.com/kata/ascii85-encoding-and-decoding
// https://www.codewars.com/kata/5277dc3ff4bfbd9a36000c1c

Object.assign(String.prototype, {
  toAscii85: function () {
    var size = 4*(Math.ceil(this.length/4));
    var padsize = size-this.length;
    var input = this + Array(padsize+1).join(String.fromCharCode(0));
    var output = '';

    for (var i=0; i<input.length; i+=4){
      var word = input.charCodeAt(i+0)*256*256*256 +
                 input.charCodeAt(i+1)*256*256 +
                 input.charCodeAt(i+2)*256 +
                 input.charCodeAt(i+3);

      if (word === 0 && i+4<=size-padsize)
        output += 'z';
      else {
        var group = new Array(5);
        group[4]=word%85; word=word/85|0;
        group[3]=word%85; word=word/85|0;
        group[2]=word%85; word=word/85|0;
        group[1]=word%85; word=word/85|0;
        group[0]=word;

        output += group.map(function(code){
          return String.fromCharCode(code+33);
        }).join('');
      }
    }

    return '<~' + (padsize? output.slice(0,-padsize): output) + '~>';
  },
  fromAscii85: function () {
    var padsize = 0;
    var input = this.slice(2,-2);
    var output = '';

    input = input.replace(/[\s\n]/g, '');

    var i=0;
    while (i<input.length){
      if (input[i] === 'z'){
        output += '\u0000\u0000\u0000\u0000';
        i++
      } else {
        var word = 0;

        if (input.length-i<5){    // last iteration
          padsize = 5-(input.length-i);
          input = input + Array(padsize+1).join('u');
        }
        word += (input.charCodeAt(i+0)-33)*85*85*85*85;
        word += (input.charCodeAt(i+1)-33)*85*85*85;
        word += (input.charCodeAt(i+2)-33)*85*85;
        word += (input.charCodeAt(i+3)-33)*85;
        word += (input.charCodeAt(i+4)-33);

        var group = new Array(4);
        group[3]=word%256; word=word/256|0;
        group[2]=word%256; word=word/256|0;
        group[1]=word%256; word=word/256|0;
        group[0]=word;

        output += group.map(function(code){
          return String.fromCharCode(code);
        }).join('');

        i+=5;
      }
    }
    return padsize? output.slice(0,-padsize): output;
  }
});
