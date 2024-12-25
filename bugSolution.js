function foo(a, b) {
  a = a === null ? 0 : a; // Default value for null a
  b = b === null ? 0 : b; // Default value for null b
  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5));   // Output: 10
console.log(foo(null, null)); // Output: 0