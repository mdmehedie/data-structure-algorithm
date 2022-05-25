let arr = [
  [
    [1, 2, 3],
    [3, 4, 5],
  ],
  [
    [1, 2, 3],
    [3, 4, 5],
  ],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[i][j].length; k++) {
      console.log(arr[i][j][k]);
    }
    console.log(' \n');
  }
}
