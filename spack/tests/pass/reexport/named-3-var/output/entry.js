const c = 1;
console.log('c', c);
const c1 = c;
const b = c1;
console.log('b');
const a1 = b;
console.log('a');
export { a1 as a };
console.log('entry');
const a2 = a1;
