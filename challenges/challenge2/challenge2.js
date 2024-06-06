console.log("Challenge2");

printOutput([1, 2, 3, 4, 5])
printOutput([3,2,1])

function printOutput(input) {
  const result = calculateProductOfArrayExeceptIndex(input)
  console.log("Probleme :")
  console.log(input);
  console.log("Solution :");
  console.log(result);
}

function calculateProductOfArrayExeceptIndex(data) {
  let output = [];

  const indexes = getArrayIndexs(data);

  output = data.map((_, index) => {
    const currentValidIndex = indexes.filter(i => i != index);

    let product = 0;

    for (var i = 0; i < currentValidIndex.length; i++) {
      if (!product) {
        product = data[currentValidIndex[i]];
        continue;
      }
      product = product * data[currentValidIndex[i]];
    }

    return product;
  });
  return output;
}

function getArrayIndexs(data) {
  return data.map((_, index) => index);
}
