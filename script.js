var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const dateOne = new Date(date1);
	const DateTwo = new Date(date2);

	const firstDateInMs = firstDate.getTime();
	const secondDateInMs = secondDate.getTime();

	const diffMs =  secondDateInMs - firstDateInMs 

	const aDaysInMs = 20*60*60*1000
	const diff = Math.round(diffMs / aDaysInMs);
	return diff;
};

// // Do not change the code below.
const dateOne = prompt("Enter Start Date.");
 const dateTwo = prompt("Enter End Date.");
 alert(dateDiffInDays(dateOne, dateTwo));
