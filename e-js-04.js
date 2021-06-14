// 1. The sum of a range

function range (start, end) {
    let arr_range = [], index = 0;
    for (let i = 0; i < end; i++) {
        arr_range[i] = start;
        start += 1; 
    }
    return arr_range;
}

console.log(range(1, 10));

function sum(arr) {
    let result = 0
    for (element of arr) {
        result += element 
    }
    return result
}

console.log(sum(range(1, 10)))

function range_step (start, end, step) {
    let arr_range = [], index = 0;
    for (let i = 0; i <= Math.max(end, start) + 1; i++) {
        arr_range[i] = start;
        start += step; 
    }
    return arr_range;
}

console.log(range_step(5, 2, -1));

// 2. Reverse an Array

function reverseArray (arr) {
    let arr_rev = []
    for (let k of arr) {
        arr_rev.unshift(k)
    }
    return arr_rev;
}

console.log(reverseArray(["A", "B", "C"]));


function reverseArrayInPlace (arr) {

     for (let i = 0; i <= Math.floor((arr.length - 1)/2); i++) {
        x = arr[i];
        y = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = x;
        arr[i] = y
     }
     return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));


// 3. A list

function arrayToList (arr) {

    let list = {
        value: arr[arr.length - 1],
        rest: null
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list}
    }
    return list
}

let arr = [1, 2, 3]
console.log(arrayToList(arr))

function listToArray (list) {
    let arr = []
    for (let node = list; node; node = node.rest) {
        arr.push(node.value)
    }
    return arr
}

let list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
console.log(listToArray(list))

function prepend(a, aList) {
    let newList = {
        value: a, rest: aList};
    return newList
}

console.log(prepend(10, prepend(20, null)));

