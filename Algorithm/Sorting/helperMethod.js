export function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
}

export default function defaultCompatre(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? 1 : -1;
}
