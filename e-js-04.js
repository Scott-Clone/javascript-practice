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