// https://www.codewars.com/kata/undo-slash-redo
// https://www.codewars.com/kata/531489f2bb244a5b9f00077e

function undoRedo(object) {
  var history = [];
  var historyIndex = 0;
  var historySize = 0;

  var SetCmd = function (key, before, after) {
    this.key = key;
    this.before = before;
    this.after = after;
  };

  Object.assign(SetCmd.prototype, {
    do: function() {
      object[this.key] = this.after;
      historyIndex++;
    },
    undo: function() {
      object[this.key] = this.before;
      historyIndex--;
    }
  });

  var DelCmd = function (key, before) {
    this.key = key;
    this.before = before;
  };

  Object.assign(DelCmd.prototype, {
    do: function() {
      delete object[this.key];
      historyIndex++;
    },
    undo: function() {
      object[this.key] = this.before;
      historyIndex--;
    },
  });

  return {
    set: function (key, value) {
      history[historyIndex] = new SetCmd(key, object[key], value);
      history[historyIndex].do();
      historySize = historyIndex;
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      history[historySize] = new DelCmd(key, object[key]);
      history[historySize].do();
      historySize = historyIndex;
    },
    undo: function () {
      if(historyIndex <= 0) {
        throw "No more undo";
      } else {
        history[historyIndex - 1].undo();
      }
    },
    redo: function () {
      if(historyIndex >= historySize) {
        throw "No more redo";
      } else {
        history[historyIndex].do();
      }
    }
  };
}
