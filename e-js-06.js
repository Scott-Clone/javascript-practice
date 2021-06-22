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
        this.members = [];
    }
    
    add (value) {
        if(!this.has(value)) {
            this.members.push(value);
        }
    }

    delete (value) {
        if (this.members)
        this.members = this.members.filter(x => x !== value);
    }

    has (value) {
        return this.members.includes(value);
    }

    static from (iterObject) {
        let group = new Group;
        for (let i of iterObject) {
            group.add(i);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
group.add(100);
console.log(group.has(10));


// 3. Iterable Groups


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c

// 4. Borrowing a Method

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(map.hasOwnProperty("one"));
// → true