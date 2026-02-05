const makeAdder = function (x) {
  return function (y) {
    return x + y;
  };
};

const addTwo = makeAdder(2);
