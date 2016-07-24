// https://www.codewars.com/kata/diffuse-the-bombs
// https://www.codewars.com/kata/54d558c72a5e542c0600060f

var steps = [
  function() {
    Bomb.diffuse(Bomb.key);
  },
  function() {
    for (var i = 0; i < 5; i++) {
      Bomb.diffuse('just keep trying');
    }
  },
  function() {
    Bomb.diffuse(BombKey);
  },
  function() {
    global.diffuseTheBomb = function() {
      return true;
    }
    Bomb.diffuse();
  },
  function() {
    Bomb.diffuse(3.14159);
  },
  function() {
    Bomb.diffuse(new Date().setFullYear(new Date().getFullYear()-4));
  },
  function() {
    var o = Object.freeze({key: 43 });
    Bomb.diffuse(o);
  },
  function() {
    Bomb.diffuse({
      num: 100,
      valueOf: function () {
        this.num = -this.num;
        return this.num;
      }
    });
  },
  function() {
    Math.random = function () {
      if (!this.count) { this.count = 0; }
      this.count++;
      if (this.count == 3) {
        return 0.5;
      }

      return 1;
    };

    Bomb.diffuse(42);
  },
  function() {
    Array.prototype.valueOf = function () {
      return this.reduce(function(pre, next) {
        return pre+next;
      });
    };

    Bomb.diffuse('eWVz');
  },
];

steps.forEach(function(step, i) {
  step();
});
