
// 1. Flattening 

function flatten(arr) {
    return arr.reduce((a, b) => a.concat(b))
}

let arr = [[1, 2, 3], [4, 5], [6]];
//console.log(flatten(arr))

// 2. Your own loop
function loop (begin, test, update, func) {
    
    for (let value = begin; test(value); value = update(value)) {
        func(value)  
    }
}

loop(3, n => n > 0, n => n - 1, console.log)

// 3. Everything 

// loop method

function every(array, test) {
    for (let arr of array) {
        if(!test(arr)) return false    
    }
    return true
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

  
// 3. Everything 

// some method

function everyS(array, test) {
    return !array.some(arr => !test(arr));  
  }
  
  console.log(everyS([1, 3, 5], n => n < 10));
  // → true
  console.log(everyS([21, 41, 16], n => n < 10));
  // → false
  console.log(everyS([], n => n < 10));

