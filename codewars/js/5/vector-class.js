// https://www.codewars.com/kata/vector-class
// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4

Vector = function (comp) {
  return {
    comp: comp,

    _cl : function (vector) {
      if (this.comp.length !== vector.comp.length) {
        throw new Error('Da fux you doin bro?')
      }
    },

    toString: function () {
      return '(' + this.comp.join(',') + ')'
    },

    add: function (vector) {
      this._cl(vector)
      return new Vector(this.comp.map(function (v, i) { return v += vector.comp[i] }))
    },

    subtract: function (vector) {
      this._cl(vector)
      return new Vector(this.comp.map(function (v, i) { return v -= vector.comp[i] }))
    },

    dot: function (vector) {
      var self = this
      var maths = 0

      this._cl(vector)

      this.comp.forEach(function (v, i) {
        maths += v * vector.comp[i]
      })

      return maths
    },

    norm: function () {
      var self = this
      var maths = 0

      this.comp.forEach(function (v, i) {
        maths += v ^ 2
      })

      return Math.sqrt(maths)
    },

    equals: function (vector) {
      var self = this
      var retval = true

      this.comp.forEach(function (v, i) {
        if (self.comp[i] !== vector.comp[i]) {
          retval = false
        }
      })

      return retval
    }

  }
}
