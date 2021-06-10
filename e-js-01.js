// 1. Looping a triangle
    // Using while loop
let hash = ""
let count = 0
while (count < 7) {
    console.log(hash);
    count += 1;
    hash += "#";
}

    // Using for loop
let pound = ""
for (let c = 0; c < 7; c += 1) {
    console.log(pound);
    pound += "#"
}

// 2. FizzBuzz

for(let num = 1; num <= 100; num ++) {
    if ((num % 3) === 0) {
        console.log("Fizz")
    } else if ((num % 3 && !(num % 5)) === 0) {
        console.log("Buzz")
    } else if ((num % 3 && num % 5) === 0) {
        console.log("FizzBuzz")
    } else {
        console.log(num)
    }
}

// Chessboard

//console.log(" # # \n# # ")

let board = " "
let n = 8

for (let c = 1; c <= n; c += 1) {

    for (let a = 0; a <= n; a += 1)
        if (a % 2 !== 0) {
            board += "#"
        } else if (a % 2 === 0) {
            board += " "
        }

    
    board += "\n"
   
    
}

console.log(board)


