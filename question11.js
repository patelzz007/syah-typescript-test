// let a = [1, 2, 3];
// let b = [100, 2, 1, 10];
// let union = [...new Set([...a, ...b])];
// console.log(union);
var a = [1, 2, 3];
var b = [100, 2, 1, 10];
var c = a.concat(b).sort();
var res = c.filter(function (value, pos) {
    return c.indexOf(value) == pos;
});
console.log(res);
