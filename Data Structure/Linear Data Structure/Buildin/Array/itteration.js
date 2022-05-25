let arr = [1, 2, 3, 4, 5, 6, 7];

//Using for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//Using for ... in loop
// for (let i in arr) {
//   console.log(arr[i]);
// }

// Using for ... of loop
// for(let e of arr){
//     console.log(e);
// }
//Using forEach() method
// arr.forEach((e, i, arr) => {
//   console.log(e * 2, i);
//   console.log(arr);
// });

//Using map() method
let newNumber = arr.map((e, i, arr) => {
  return e * 2;
});
console.log(newNumber);

//Using filter() method
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
