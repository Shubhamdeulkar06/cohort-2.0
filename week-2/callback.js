// example without callback
function sum(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSums(a, b) {
  const square1 = sum(a);
  const square2 = sum(b);
  return square1 + square2;
}

function sumOfCubes(a, b) {
  const cube1 = cube(a);
  const cube2 = cube(b);
  return cube1 + cube2;
}

console.log("sum of sums", sumOfSums(5, 6));
console.log("sum of cubes", sumOfCubes(5, 6));

// generic function with DRY principle by using callback function
function sumOfsomthing(a, b, cbfn) {
  const sum1 = cbfn(a);
  const sum2 = cbfn(b);
  return sum1 + sum2;
}

console.log("sum of somthing", sumOfsomthing(5, 6, cube));
