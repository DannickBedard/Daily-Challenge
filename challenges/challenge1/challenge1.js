
console.log("Challenge1");

const data = [10, 15, 3, 7, 9, 8];
const data2 = [10, 15, 3, 7, 9, 8];

getNumberToEqualSum(data, 17);
getNumberToEqualSum(data, 13);

function getNumberToEqualSum(data, sum)
{
  if (!data) {
    console.log("No data provided");
    return false;
  }

  // trip down data to only value under sum
  const reducedData = data.filter(number => number < sum);

  let result = "";

  for (let i = 0; i < reducedData.length; i++) {

    let currentNumberToSum = reducedData[i];
    reducedData.forEach(number => {

      if ((currentNumberToSum + number) == sum) {
        result += `${currentNumberToSum} + ${number}\n`; 
      }
    })

  }

  console.log(`For the problem ${data.toString()}`)

  if (result == "") {
    console.log("The is no value that add up to the expedted sum");
    return false;
  }

  console.log("There is those solutions : ")
  console.log(result);
  return true;

}
