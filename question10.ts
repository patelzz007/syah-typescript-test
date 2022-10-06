let merge_array = (array1, array2) => {
  let result_array: string[] = [];
  const arr = array1.concat(array2);
  let len = arr.length;
  const assoc = {};

  while (len--) {
    console.log("Array Length :", len);
    const item = arr[len];
    console.log("Assoc : ", assoc);
    if (!assoc[item]) {
      result_array.unshift(item);
      assoc[item] = true;
    }
  }
  return result_array;
};

const array1 = [1, 2, 3];
const array2 = [2, 30, 1];

console.log(merge_array(array1, array2));
