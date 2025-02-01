function foo(x){
  if (x === null) {
    return 0; 
  } else if (x > 100) {
    return x *2; // Fixed condition to return correct value
  }
  return x * 2;
}
console.log(foo(null)); // Output: 0
console.log(foo(50));  // Output: 100
console.log(foo(150)); // Output: 300