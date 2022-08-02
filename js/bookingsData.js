//0-> red
//1-> grey
//2->white
//3->green
const bookings = {};
//console.log(bangalore);
const addBooking = (desk) => {
  //console.log(bookings);
  const bookings = JSON.parse(localStorage.getItem("bookings"));

  const { row, col, location, month, day } = desk;

  bookings[month] = bookings[month] ? bookings[month] : {};
  bookings[month][day] = {
    row: row,
    col: col,
  };
  localStorage.setItem("bookings", JSON.stringify(bookings));

  //console.log(bookings);
};
const deleteBooking = (currentMonth, currentDay) => {
  let bookings = localStorage.getItem("bookings");
  bookings = JSON.parse(bookings);

  delete bookings[currentMonth][currentDay];
  localStorage.setItem("bookings", JSON.stringify(bookings));
};
if (JSON.parse(localStorage.getItem("bookings")) === null) {
  localStorage.setItem("bookings", JSON.stringify(bookings));
}

export { addBooking, deleteBooking };
