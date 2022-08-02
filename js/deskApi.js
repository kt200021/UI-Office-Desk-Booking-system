const modifyDesk = (desk) => {
  const { row, col, location, month, day } = desk;
  const blrData = JSON.parse(localStorage.getItem("blrData"));

  //console.log(month, day);

  //console.log(deskLayout[row]);
  blrData[month][day][row][col - 1] = 0;
  //console.log(blrData[month][day][row]);
  localStorage.setItem("blrData", JSON.stringify(blrData));
  const d = JSON.parse(localStorage.getItem("blrData"));

  const d1 = d[month][day];
  console.log(d, d1);
};
export default modifyDesk;
