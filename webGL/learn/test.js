let c = Symbol.for('c')
let a = Symbol.for('c')
let obj = {
    [Symbol('a')]:'www',
    [Symbol.for('b')]:'bbb',
    'a':'aaa',
     c:'ccc',
     a: 'AAA',
     'a':'aaa2',
}

console.log(a===c);
console.log(obj['a']);
console.log(obj['a']);
console.log(obj['c']);
console.log(obj[Symbol.keyFor(a)]);

if (!Number.isNaN) {
    Number.isNaN = function isNaN(x) {
      return x !== x;
    };
}

