
let arr = [0, 2, 4, 5, 6]

function Bubble(arr){
  for (let i = 1; i < arr.length; i++ );
  let x = arr[i];
  let j = 1;
  while (j > 0 && arr[j - 1] > x){
    arr[j] = arr [j-1];
    --j;
  }
  arr[j] = x;
}
