// diff between just two arrays:
function arrayDiff(a, b) {
    var arrays = Array.prototype.slice.call(arguments);
    var diff = [];
    arrays.forEach(function (arr, i) {
        var other = i === 1 ? a : b;
        arr.forEach(function (x) {
            if (other.indexOf(x) === -1) {
                diff.push(x);
            }
        });
    });
    return diff;
}
var a123 = [1, 2, 3];
var b123 = [100, 2, 1, 10];
console.log(arrayDiff(a123, b123));
