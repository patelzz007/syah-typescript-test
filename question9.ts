let find_duplicate_in_array = (arra1) => {
  const object = {};
  const result: string[] = [];

  arra1.forEach((item) => {
    if (!object[item]) object[item] = 0;
    object[item] += 1;
  });

  for (const prop in object) {
    console.log("Prop", prop);
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }

  return result;
};

console.log(
  find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 4, 7, 71, 3, 6])
);
