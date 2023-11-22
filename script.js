var dateDiffInDays = function (date1, date2) {
  const dateOne = new Date(date1);
  const dateTwo = new Date(date2);

  const firstDateInMs = dateOne.getTime();
  const secondDateInMs = dateTwo.getTime();

  const diffMs =  secondDateInMs - firstDateInMs 

  const aDayInMs = 24*60*60*1000
  const diff = Math.round(diffMs / aDayInMs);
  
  return diff;
};

const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));