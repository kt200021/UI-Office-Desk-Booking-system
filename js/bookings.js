let currentDate, currentMonth;
currentMonth = "7";

const dateCell = document.querySelectorAll(".calendar td");
const showBookings = document.querySelector(".show-bookings");

dateCell.forEach((element) => {
  //console.log(element);
  let bookings = localStorage.getItem("bookings");
  //console.log(bookings);
  bookings = JSON.parse(bookings);
  const day = element.innerHTML;
  //console.log(day);
  //console.log(bookings);
  /// if (day === "15") console.log(bookings[currentMonth][day]);

  const seat =
    bookings[currentMonth] && bookings[currentMonth][day]
      ? bookings[currentMonth][day]
      : null;
  //if (day === "15") console.log(seat);
  const deskNo = seat ? seat.row + seat.col : "";
  //if (day === "15") console.log(deskNo);
  element.innerHTML = `${day}<br>${deskNo} `;
});

// getBookings();
// console.log(bookings);
