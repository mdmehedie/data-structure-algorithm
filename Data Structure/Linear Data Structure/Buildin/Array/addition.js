let arr = [1, 2, 3, 4];

//PUSH Method Adding element at the end of the array
arr.push(5);
//[1, 2, 3, 4, 5];

arr.push(6, 7);
//[1, 2, 3, 4, 5, 6, 7];

//Unshift Methods Adding element at the beginning of the array
arr.unshift(3, 0);
console.log(arr);

//Splice Methods Adding element at specific index in the array
arr.splice(2, 0, 5, 6);

//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("5" , "6") define the new elements to be added.

console.log(arr);
