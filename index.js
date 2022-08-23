////////// Logical Thinking
// 1. Lowest to Highest
let array = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

console.log(array.sort().reverse());
console.log('--------------------------1');

// 2. Alphabetical Order
let names = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

console.log(names.sort());
console.log('---------------------------2');

// Bonuses //

const byLength = names.sort((a, b) => {

    return a.length - b.length;
})
console.log(byLength);
console.log('-----------------------Bonuses');
