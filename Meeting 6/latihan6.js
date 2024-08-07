// Nomer 1
let identity = ["Wildan", "16", "Cisauk"];
console.log(identity[2]);

// Nomer 2
identity[1] = "Mukhaladun";
console.log(identity);

// Nomer 3
identity.splice(2, 1);
console.log(identity);

// Nomer 4
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = a1.concat(a2);
console.log(a3);

// Nomer 5
console.log(identity.indexOf("Cisauk"));

// Nomer 6
let numbers = [34, 7, 23, 32, 5];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

// Nomer 7
console.log(numbers.length);
