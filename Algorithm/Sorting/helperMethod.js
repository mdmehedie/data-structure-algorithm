export let swap = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
};

export let defaultCompatre = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a < b ? 1 : -1;
};
