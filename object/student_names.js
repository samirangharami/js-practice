const step = [
  { name: "sagnik", age: 20, state: "WB", bg: "CSE" },
  { name: "yash", age: 21, state: "UK", bg: "ECE" },
  { name: "shivang", age: 22, state: "Delhi", bg: "CSE" },
  { name: "santo", age: 19, state: "Kerala", bg: "ECE" },
  { name: "som", age: 19, state: "Delhi", bg: "ME" },
  { name: "kartick", age: 19, state: "AP", bg: "CSE" },
  { name: "pradip", age: 19, state: "WB", bg: "CSE" },
  { name: "adi", age: 21, state: "Kerala", bg: "CSE" },
  { name: "sivaji", age: 22, state: "AP", bg: "CSE" },
  { name: "ayush", age: 18, state: "Delhi", bg: "ME" },
  { name: "himanshu", age: 20, state: "UK", bg: "ECE" },
  { name: "arijit", age: 21, state: "WB", bg: "EE" },
  { name: "vikas", age: 20, state: "UP", bg: "EE" },
  { name: "vivek", age: 21, state: "UP", bg: "EE" },
];

const isInRange = (age, rangeStart, rangeEnd) => {
  return rangeStart <= age && age <= rangeEnd;
};

const isValid = (ele, candidate, valueToSearch, rangeStart, rangeEnd) => {
  return ele[candidate] === valueToSearch || (!valueToSearch &&
    isInRange(ele[candidate], rangeStart, rangeEnd));
};

const fetchStudents = ({ candidate, valueToSearch, rangeStart, rangeEnd }) => {
  const fetchedStudents = step.filter((ele) =>
    isValid(ele, candidate, valueToSearch, rangeStart, rangeEnd)
  );

  return fetchedStudents;
};

console.log(fetchStudents({ candidate: "bg", valueToSearch: "ECE" }));
console.log(
  fetchStudents({ candidate: "age", rangeStart: 18, rangeEnd: 20 }),
);
