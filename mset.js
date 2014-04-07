function Set (name) {
  var self = this;

  self.length = 0;
  self.set = {};

  if (arguments.length) self.add.apply(self, arguments);

  return this; 
}

Set.prototype = {
  toArray: function () {
    return Object.keys(this.set).map(function (num) {
      return +num;
    }).sort(function (a,b) {
      return a - b;
    });
  },
  add: function () {
    var self = this;
    var i = 0;

    if (Object.prototype.toString.call(arguments[0]) === '[object Array]') {
      arguments[0].forEach(function (n) {
        self.set[n] = true; 
        self.length++;
      });
    } else while (!isNaN(arguments[i])) {
      self.set[arguments[i++]] = true; 
      self.length++;
    }

    return this; 
  },
  remove: function (element) {
    if (this.has(element)) {
      delete this.set[element];
    }

    return this;
  },
  has: function (element) {
    return this.set.hasOwnProperty( element );
  },
  generate: function (start, count, callback) {
    var num = null;

    try {
      if (arguments.length !== 3) {
        throw new SyntaxError('Please provide start index, count and a callback.');
      }
    } catch (e) {
      console.log(e.message);
    }

    for (; start < count; start++) {
      num = callback(start);
      if (num) this.add(num);
    }

    return this; 
  },
  union: function (unionSet) {
    try {
      if (!(unionSet instanceof Set)) {
        throw new TypeError('The union set must be of type Set.');
      }
    } catch (e) {
      console.log(e.message);
    }

    var union = new Set(this.toArray());

    for (var element in unionSet.set) {
      union.add(element);
    }

    return union;
  },
  intersect: function (intersectionSet) {
    try {
      if (!(intersectionSet instanceof Set)) {
        throw new TypeError('The intersection set must be of type Set.');
      }
    } catch (e) {
      console.log(e.message);
    }

    var intersection = new Set();

    for (var element in intersectionSet.set) {
      if (this.has(element)) intersection.add(element);
    }

    return intersection;
  },
  isSubsetOf:  function (superSet) {
    for (var element in this.set) {
      if (!superSet.has(element)) return false;
    }

    return true;
  },
  equalTo: function (checkSet) {
    return checkSet.isSubsetOf(this) && this.isSubsetOf(checkSet);
  }
};

if (typeof module === 'object' && module.hasOwnProperty('exports')) {
  module.exports = Set;
}