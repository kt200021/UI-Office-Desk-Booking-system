//0-> red
//1-> grey
//2->white
//3->green
const bookings = {};
//console.log(bangalore);
const addBooking = (desk) => {
  let bookings = localStorage.getItem("bookings");
  //console.log(bookings);
  bookings = JSON.parse(bookings);
  const { row, col, location, month, day } = desk;
  bookings[month] = bookings[month] ? bookings[month] : {};
  bookings[month][day] = {
    row: row,
    col: col,
  };
  localStorage.setItem("bookings", JSON.stringify(bookings));
  //console.log(bookings);
};

export default bookings;
export { addBooking };
