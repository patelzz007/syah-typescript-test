let a = [1, 2, 3];
let b = [100, 2, 1, 10];
let c = a.concat(b).sort();
let res = c.filter((value, pos) => {
  return c.indexOf(value) == pos;
});

console.log(res);
