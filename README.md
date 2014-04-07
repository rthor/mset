# Mathematical Sets in JavaScript

A reasonably well crafted although untested JavaScript implementation of a mathematical set. Created bcause I needed one proof to be tested and I didn't have access to Sage, Wolfram|Alpha or MatLab.

## Usage

Import the thing using for example node and then just create a new Set. Easy right?

```javascript
var myEmptySet = new Set(); 
var myI5Set = new Set([1,2,3,4,5]); 
```

## API

```javascript
var Set = require('mset');
```

### var set = new Set();
Create a new Set object with optional arguments, numbers or an array of numbers to initialize the set with. E.g.

```javascript
var evenNumbers = new Set([2,8,16,222]);
```

### set.add([arrayOfNumbers] || [numbers])
Add a single, or an array of numbers to the set.

Returns the set.

### set.remove( element )
Remove a single `element` from the set.

Returns the set.

### set.generate(start, count, callback)
Cenerate the set with the use of a function. 

E.g. create a set of even integers from 1 - 100:

```javascript
var even = new Set().generate(0, 100, function ( n ) {
  return (n % 2 === 0 ? n : null);
});

console.log(even.toArray()); // => [2, 4, 6, ..., 98]
```

### set.toArray()
Returns an array representation of the set.

### set.has(element)
Check if the set contains an element `element`.

Returns a boolean value.

### set.union(anotherSet)
Returns a new set that is union of `set` and `anotherSet`.

### set.intersect(anotherSet)
Returns a new set that is an intersection of `set` and `anotherSet`.

### set.isSubsetOf(anotherSet)
Check if the set is a subset of `anotherSet`.

Returns a boolean value.

### set.equalTo(anotherSet)
Check if the set is equal to `anotherSet`.

Returns a boolean value.

## The MIT License (MIT)

Copyright (c) 2014 Ragnar Þór Valgeirsson (rthor) http://rthor.is

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.