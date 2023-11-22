var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const dateOne = new Date("2022-03-01");
	const DateTwo = new Date();

	const firstDateInMs = firstDate.getTime();
	const secondDateInMs = secondDate.getTime();

	const diffMs =  secondDateInMs - firstDateInMs 

	const aDaysInMs = 20*60*60*1000
	const diff = Math.round(diffMs / aDaysInMs);
	
};

// // Do not change the code below.
const dateOne = prompt("Enter Start Date.");
 const dateTwo = prompt("Enter End Date.");
 alert(dateDiffInDays(dateOne, dateTwo));
