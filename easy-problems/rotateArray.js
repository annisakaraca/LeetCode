let rotateArray = (arr, k) => {
  k = k % arr.length;
  let count = 0;
  for (var start = 0; count < arr.length; start++) {
    let current = start;
    let prev = arr[current];
    let next = (current + k) % arr.length;
    let temp = arr[next];
    arr[next] = prev;
    current = next;
    count++;
    while (current !== start) {
      prev = temp;
      next = (current + k) % arr.length;
      temp = arr[next];
      arr[next] = prev;
      current = next;
      count++;  
    }
  }
  return arr;
}

let arr = [1,2,3,4,5,6,7];
console.log(rotateArray(arr, 3))