let arr = [1, 2, 3, 4, 5, 6, 7];

//POP Method Removing element from the back of the array
arr.pop();
//[ 1, 2, 3, 4, 5, 6 ]


//Shift Method Removing element from the front of the array
arr.shift();
//[ 2, 3, 4, 5, 6 ]

//Splice method Removing element from specific position in the array
arr.splice(2, 1)
//[ 2, 3, 5, 6 ]

console.log(arr);
