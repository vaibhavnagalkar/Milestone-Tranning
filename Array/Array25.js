function addAltArrays(arr1, arr2) {
    const arr3 = [];
    for (let i = 0; i < arr1.length || i < arr2.length;i++) {
      if (i < arr1.length) {
        arr3.push(arr1[i]);
      }
      if (i < arr2.length) {
        arr3.push(arr2[i]);
      }
    }
    return arr3;
  }
  console.log(addAltArrays([5,18,26,30],[101,102]));