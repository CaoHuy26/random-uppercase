const transformer = (text) => {
  // Split to array 2D
  const arr = text.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('');
  }

  let x = 0;
  // Random uppercase
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      x += 1;
      if (x % 2 !== 0) {
        arr[i][j] = arr[i][j].toUpperCase();
      }
    }
  }

  // Merge
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      arr[i] = arr[i].join('');
    }
  }

  return arr.join(' ');
}

export default transformer;