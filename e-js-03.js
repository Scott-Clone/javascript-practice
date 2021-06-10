// 1. Minimum

// Assume both

function min (a, b) {
    if (a > b) {
        return b
    } else if (a == b) {
        return "numbers are equal"

    } else {
        return a
    } 
}

console.log(min(0, -10))

// 2. Recursion

function isEven(a) {
    num = Math.abs(a)
    if(num == 0) {
        return true 
    } else if (num == 1) {
        return false
    } else {
        return isEven(num - 2)
    }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))

// For negative numbers since a negative number is the same as its positive 
// counterpart, a condition can be added to ensure num is positive

// 3. Bean Counting

function countBs (string) {
    let count = 0;
    for (let i = 0;  i < string.length; i++) {
        if (string[i] == "B") {
            count += 1;
        }
    }
    return count;
}

console.log(countBs("TestBBssB"));

function countChar(string, char) {
    let count = 0;
    for (let i = 0;  i < string.length; i++) {
        if (string[i] == char) {
            count += 1;
        }
    }
    return count;
}

console.log(countChar("kakkerlak", "k"));
