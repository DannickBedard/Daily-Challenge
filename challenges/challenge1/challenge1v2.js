
console.log("Challenge1");

const data = [10, 15, 3, 7, 9, 8];
const data2 = [10, 15, 3, 7, 9, 8];

isSumPossibleIdDataSet(data, 17);
isSumPossibleIdDataSet(data, 13);

function isSumPossibleIdDataSet(data, sum) {

  if (!data) {
    console.log("No data provided");
    return false;
  }

  let result = getNumberToEqualSum(data, sum);

  console.log(`For the problem ${data.toString()}`)

  if (result.toString() == "") {
    console.log("The is no value that add up to the expedted sum");
    return false;
  }

  console.log("There is those solutions : ")
  result.forEach(data => console.log(`${data[0]} + ${data[1]}`));
  return true;
}

function getNumberToEqualSum(data, sum)
{

  // trip down data to only value under sum
  const reducedData = data.filter(number => number < sum);

  let result = [];

  for (let i = 0; i < reducedData.length; i++) {
    let currentNumberToSum = reducedData[i];
    reducedData.forEach(number => {

      if ((currentNumberToSum + number) == sum) {
        result.push([currentNumberToSum, number]); 
      }
    })
  }

  return result;
}
