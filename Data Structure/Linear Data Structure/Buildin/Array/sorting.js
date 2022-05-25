let arr = [2, 5, 3, 7, 5];
arr.sort(); //By default in ascending order
//[2, 3, 5, 5, 7];

arr.sort((a, b) => b - a);
//[7, 5, 5, 3, 2]
