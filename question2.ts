let array_Clone = (arra1: Array<string | number | Array<string | number>>) =>
  arra1.slice(0);

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));