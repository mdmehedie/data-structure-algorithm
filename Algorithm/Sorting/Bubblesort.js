import helperMethod from './helperMethod';

function bubblesort(arr) {
  let { defaultCompatre, swap } = helperMethod;
  console.log(defaultCompatre);
  const len = arr.length;

//   for (let i; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (defaultCompatre(arr[j], arr[j + 1]) === 1) {
//         swap(arr[j], arr[j + 1]);
//       }
//     }
//   }

//   return arr;
}

let arr = [2, 5, 3, 7, 5];

console.log(bubblesort(arr));
