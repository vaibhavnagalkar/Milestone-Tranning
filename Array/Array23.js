function insertNumber(Arr, num) {
    let i = 0;
    while (Arr[i] < num) {
      i++;
    }
    Arr.splice(i, 0, num);
    return Arr;
  }
  console.log(insertNumber([5,18,26,30,40],6));