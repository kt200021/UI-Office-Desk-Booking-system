//0-> red
//1-> grey
//2->white
//3->green
const DeskData = () => {
  const deskList = [];

  for (let index = 1; index <= 30; index++) {
    deskList.push(deskObj);
  }

  return deskList;
};
const deskList = DeskData();

// const MonthData=(deskList)=>{
// for (let index = 1; index < array.length; index++) {
//     const element = array[index];

// }

// }
const YearData = (deskList) => {
  //   const months = [
  //     "JAN",
  //     "FEB",
  //     "MAR",
  //     "APR",
  //     "MAY",
  //     "JUN",
  //     "JULY",
  //     "AUG",
  //     "SEP",
  //     "OCT",
  //     "NOV",
  //     "DEC",
  //   ];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const yearObj = {};
  months.forEach((element) => {
    // console.log(element);
    yearObj[element] = deskList;
  });
  return yearObj;
};

const calendarData = YearData(deskList);
//console.log(bangalore);
export { calendarData };
