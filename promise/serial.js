console.log("first");

const x1 = new Promise((resolve, reject) => {
  reject(Deno.readTextFile("./file1.txt"));
  console.log("in first promise");
});

console.log("second");

const x2 = new Promise((resolve, reject) => {
  resolve(Deno.readTextFile("./file2.txt"));
  console.log("in second promise");
});

console.log("third");

x1.then((x) => {
  console.log(x);
  console.log("inside then of 1st promise");
}, (x) => console.log(`${x} is rejected`));

console.log("fourth");

x2.then((x) => {
  console.log(x);
  console.log("inside then of 2nd promise");
});

console.log("fifth");
