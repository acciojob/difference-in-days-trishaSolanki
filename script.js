var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const utcDate1 = Date.UTC(
    parseInt(date1.substring(0, 4)),
    parseInt(date1.substring(5, 7)) - 1, // Months are zero-based
    parseInt(date1.substring(8))
  );
	const utcDate2 = Date.UTC(
		parseInt(date2.subString(0,4)),
		parseInt(date2.subString(5,7)) - 1,
		parseInt(date2.subStirng(8))
	);
	const timeDiff = utcDate2 - utcDate1;

  // Convert the difference to days
  const daysDiff = Math.floor(timeDiff / (24 * 60 * 60 * 1000));

  return daysDiff;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
