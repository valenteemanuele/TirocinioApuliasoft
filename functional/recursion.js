function reduce(arr, fn, initial) {
    if(!arr.length) {
        return initial
    }
    initial = fn(initial,arr[0]);
    return reduce(arr.slice(1),fn, initial);
  }

  module.exports = reduce
