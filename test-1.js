const isObject = (value) => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const compareValues = (a, b) => {
  if (typeof a === "string" || typeof a === "number") {
    return a === b;
  } else if (isObject(a)) {
    return compareObject(a, b);
  }
};

const compareObject = (obj1, obj2) => {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    let keys = Object.keys(obj1);
    return keys.every((key) => compareValues(obj1[key], obj2[key]));
  }
  return false;
};
const compareArray = (a1, a2) => {
  if (a1.length === a2.length) {
    return a1.every((el, i) => compareValues(a1[i], a2[i]));
  }
  return false;
};

const deepEqual = (ag1 = "", ag2 = "") => {
  if (typeof ag1 == "string") {
    return compareValues(ag1, ag2);
  } else if (Array.isArray(ag1)) {
    return compareArray(ag1, ag2);
  } else if (isObject(ag1)) {
    //if object
    return compareObject(ag1, ag2);
  }
};
let r1 = deepEqual("foo", "foo"); //true
let r2 = deepEqual({ id: 1 }, { id: 1 }); // true
let r3 = deepEqual([1, 2, 3], [1, 2, 3]); //true
let r4 = deepEqual([{ id: "1" }], [{ id: "2" }]); // false

console.log("res", { r1, r2, r3, r4 });
