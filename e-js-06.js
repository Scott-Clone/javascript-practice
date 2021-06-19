// 1. A Vector Type

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(new_vec) {
        return new Vec(this.x + new_vec.x, this.y + new_vec.y);
    }

    minus(new_vec) {
        return new Vec(this.x - new_vec.x, this.y - new_vec.y);
    }
    get length () {
        return Math.sqrt(this.x**2 + this.y**2);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// 2. Groups

class Group {
    constructor() {
        this.members = []
    }
    
    get add () {
        if(!this.has(value)) {
            this.members.push(value)
        }
    }

    delete (value) {
        this.members = this.members.filter(v =>v !== value)
    }

    has (value) {

    }
}

let group = new Group(4);
// console.log(group.has(10));
// → true
//console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// 3. Iterable Groups

// 4. Borrowing a Method