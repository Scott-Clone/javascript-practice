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

function reverse (arr) {
    let arr_rev = []
    let j = arr.length -1
    for (let i of arr) {
        arr_rev[j] = i;
        j -= 1;
    }
    return arr_rev;
}

console.log(reverse([5, 2, -1]));

function reverseInPlace (arr) {

}

// 3. A list