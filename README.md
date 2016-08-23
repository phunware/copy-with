# copy-with

A library for immutably working with JavaScript objects.

## TL;DR

```js
var cw = require('copy-with');
var foo = { x: 1, y: 1 };
var bar = cw.copyWith(foo, { y: 2, z: 3 }); // { x: 1, y: 2, z: 3 }
```

## Principles and Goals

- Pure functions (never mutate input objects)
- Make it easy to "modify" immutable objects, or objects you want to treat as immutable
- Don't wrap objects or add methods to them - use plain JavaScript objects
  - (that means that output objects will work _anywhere_)
- If an output object would be identical to the input, just return the input.
  - This preserves referential equality and allows comparisons like this:
  
    ```js
    if (prevObj === newObj) { /* `newObj` has definitely changed */ }
    ```
    
  - This works very nicely with [Redux](http://redux.js.org/), among other functionally-inspired libraries and patterns!

## API

### cw.copyWith(input, changes)

Returns a copy of `input` with `changes` applied. Similar to [`Object.assign({}, input, changes)`](http://www.2ality.com/2014/01/object-assign.html), but will return the original `input` if applying `changes` wouldn't actually change any values.

Examples:

```js
copyWith({ x: 1 }, { y: 2 }) // { x: 1, y: 2 }
copyWith({ x: 1 }, { x: 2 }) // { x: 2 }
copyWith({ x: 1, y: 2 }, { x: 1 }) // Returns `input`, no changes necessary
```

### cw.copyWithout(input, ...keys)

Returns a copy of `input` with `keys` (and their associated values) removed, or returns the original `input` if it does not have any of the `keys` specified.

Examples:

```js
copyWithout({ x: 1, y: 2 }, 'y') // { x: 1 }
copyWithout({ x: 1, y: 2, z: 3 }, 'x', 'y') // { z: 3 }
copyWithout({ x: 1 }, 'y') // Returns `input`, no changes necessary
```

### cw.copyWithVal(input, key, value)

Returns a copy of `input` with a single change made: `key` is set to `value`. Returns the original `input` if `key` is already set to `value` in `input`.

Examples:

```js
copyWithVal({ x: 1, y: 2 }, 'y', 3) // { x: 1, y: 3 }
copyWithVal({ x: 1, y: 2 }, 'x', 1) // Returns `input`, no changes necessary
```

### cw.copyWithDeep(input, path, changes)

Returns a copy of `input` where `changes` have been applied to the deeply nested object at `path`, which is an array of string keys. Returns the original `input` if there are no changes to be made.

Examples:

```js
copyWithDeep({ x: { y: { z: 1 } } }, ['x', 'y'], { w: 2 }) // { x: { y: { z: 1, w: 2} } }
copyWithDeep({ x: { y: 1, z: 2 } }, ['x'], { y: 1 }) // Returns `input`, no changes necessary
```

### cw.copyWithDeepVal(input, path, value)

Returns a copy of `input` where the deeply nested property at `path` (which is an array of string keys) has been set to `value`. Returns the original `input` if there is no change to be made.

Examples:

```js
copyWithDeepVal({ x: { y: { z: 1 } } }, ['x', 'y', 'z'], 2) // { x: { y: { z: 2 } } }
copyWithDeepVal({ x: { y: 1 } }, ['x', 'y'], 1) // Returns `input`, no changes necessary
```

### cw.firstIfSame(original, modified)

Returns `modified`, unless it is identical (given a shallow equality comparison) to `original`, in which case it returns `original`. *This function supports arrays*, unlike most functions in this library!

Examples:
```js
var array = ['one', 'two', 'three']
firstIfSame(array, array.map(s => s.toUpperCase())) // Returns `modified`, which is ['ONE', 'TWO', 'THREE']
firstIfSame(array, array.map( s=> s.toLowerCase())) // Returns `original`, which is `array` (['one', 'two', 'three'])
```

## Development and Contributing

You'll need to be running at least Node v6 - this project is written in ES2015 (aka ES6) and doesn't use Babel for tests.

Clone this repo, and run `npm install`. You can run `npm test` to run unit tests. Run `npm run build` to compile to ES5 in the `lib` directory.

## Publishing workflow

```sh
$ npm version [major|minor|patch]
$ npm run build
$ npm publish
$ git push --tags
```

## Wishlist

We'd gladly accept PRs for the following:

- [ ] Support testing and building on Windows (should just be matter of using  [cross-env](https://www.npmjs.com/package/cross-env) and a few other cross-platform scripts)
- [ ] Support ES3 environments (right now there's a dependency on many of the ES5 Array.prototype methods)
- [ ] Support arrays, especially in the `copyWithDeep` and `copyWithDeepVal` functions
