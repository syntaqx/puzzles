// https://www.codewars.com/kata/metaprogramming-lisp-style-generic-functions
// https://www.codewars.com/kata/526de57c8f428fc1fd000b8c

function callNextMethod(context) {
  var args = Array.prototype.slice.call(arguments,1);
  var ret;
  var fn;
  context.currentCombination = context.currentCombination || 'around';
  if(context.around.length > 0) {
    fn = context.around[0].func;
    // Remove it from the context
    context.around = context.around.slice(1);
    context.currentCombination = 'around';
    ret = fn.apply(context, args);
  } else if (context.primary.length > 0) {
    context.before.forEach(function (meth) {meth.func.apply(context, args);});
    context.before = [];
    context.currentCombination = 'primary';
    fn = context.primary[0].func;
    context.primary = context.primary.slice(1);
    ret = fn.apply(context, args);
    context.after.forEach(function (meth) {meth.func.apply(context, args);});
    context.after = [];
  } else {
    throw "No next method found for " + name + " in " + context.currentCombination;
  }
  return ret;
};

function matchesType(obj, type) {
  // Return 0 if no matching. Else, the more specific is the match
  // the greater is the integer returned
  if(obj instanceof Object) {
    // Case 1 or 2
    if(obj.constructor.name === type) {
      // Case 1
      return 5;
    } else {
      var parent = Object.getPrototypeOf(obj);
      while(parent !== null) {
        if(parent.constructor.name == type) {
          // Case 2
          return 4;
        } else {
          parent = Object.getPrototypeOf(parent);
        }
      }
    }
  }
  if(obj === null && type === 'null') {
    // Case 3
    return 3;
  } else if (typeof obj === type) {
    // Case 4
    return 2;
  } else if(type === '*') {
    return 1;
  }
  return 0;
}

function arrayEqual(arr1, arr2) {
  return arr1.length == arr2.length &&
    arr1.every(function (value, index) {return value === arr2[index];});
}

// TODO clean
function cloneArray(arr) {
  return arr.reduce(function (result, x) { result.push(x); return result; }, []);
}


function toType (x) {
  if(typeof x == 'object') {
    return Object.getPrototypeOf(x).constructor.name;
  } else if (x == null) {
    return 'null';
  } else {
    return typeof x;
  }
}

// Compare two arrays of same lengths, according to their values,
// first values taking precedence over next ones.
function compareArray(arr1, arr2) {
  for(var i = 0; i < arr1.length; ++i) {
    if(arr1[i] < arr2[i]) {
      return -1;
    }
    if(arr1[i] > arr2[i]) {
      return 1;
    }
  }
  return 0;
}

function defgeneric(name) {
  var generic = function () {
    this.name = name;
    // One possible implementation of the generic function
    var args = Array.prototype.slice.call(arguments,0);
    var method = generic.findMethod.apply(this, args);
    return method.apply(this, args);
  };

  generic.defmethod = function (discriminator, fn, combination) {
    combination = combination || 'primary';
    // XXX: assign the new method
    this.removeMethod(discriminator, combination);
    defined[combination].push({discr: discriminator.split(','), func: fn});
    // invalidate cache
    cache = {};
    return generic;
  };

  generic.removeMethod = function (discriminator, combination) {
    combination = combination || 'primary';
    // XXX: remove the method
    discriminator = discriminator.split(',');
    defined[combination] = defined[combination].filter(
      function (meth) {return !arrayEqual(discriminator, meth.discr);});
    // invalidate cache
    cache = {};
    return generic;
  };

  generic.findMethod = function () {
    // XXX: return the function that this generic would invoke
    // given the Arguments list at the time of invocation.
    var args = Array.prototype.slice.call(arguments, 0);
    var signature = args.map(toType).join(',');
    var method = cache[signature];
    if(method === undefined) {
      var chain = generateCallChain(args);
      if(chain.primary.length == 0 &&
         chain.around.length == 0) {
        throw "No method found for " + this.name + " with args: " + args.map(toType).join(',');
      }
      method = function () {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift(cloneCallChain(chain));
        return callNextMethod.apply(this, args);
      };
      // Put result in cache
      cache[signature] = method;
    }
    return method;
  };

  // ----------------------------------------

  var defined = {
    'around': [],
    'before': [],
    'primary': [],
    'after': []
  };

  var cache = {};

  function generateCallChain(args) {
    function discrToSpecificity(methodArr) {
      var ret = methodArr.map(function (meth) {
        // Convert discriminator to array of matching specificity
        return {
          discr: meth.discr,
          matches: meth.discr.map(
            function (type, index) { return matchesType(args[index], type); }),
          func: meth.func};
      });
      ret = ret.filter(function (meth) {
        return 0 < meth.matches.reduce(function (result, specificity) { return result * specificity; }, 1);
      });
      return ret;
    }
    var mostSpecificFirst = function (method1, method2) {
      return -compareArray(method1.matches, method2.matches);
    };
    return {
      around: discrToSpecificity(defined.around).sort(mostSpecificFirst),
      before: discrToSpecificity(defined.before).sort(mostSpecificFirst),
      primary: discrToSpecificity(defined.primary).sort(mostSpecificFirst),
      after: discrToSpecificity(defined.after).sort(mostSpecificFirst).reverse()
    };
  };

  function cloneCallChain(chain) {
    return {
      around:chain.around.slice(),
      before:chain.before.slice(),
      primary:chain.primary.slice(),
      after:chain.after.slice()
    };
  }


  return generic;
};
