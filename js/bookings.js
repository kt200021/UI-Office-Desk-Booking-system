let currentDate, currentMonth;
currentMonth = new Date().getMonth() + 1;

const dateCell = document.querySelectorAll(".calendar td");
const showBookings = document.querySelector(".show-bookings");
const calendarMonth = document.querySelector(".calendar-month");
const seatOverlay = document.querySelector(".seat-overlay");
const seatNoOverlay = document.querySelector(".seat-no-overlay");
const cancelSeat = document.querySelector(".cancel-seat");
const editSeat = document.querySelector(".edit-seat");
let currentDay;
dateCell.forEach((element, index) => {
  element.addEventListener("click", () => {
    const seatRow = element.getAttribute("data-seat-row");
    const seatCol = element.getAttribute("data-seat-col");
    const seatNo = seatRow + seatCol;
    cancelSeat.setAttribute("data-row", seatRow);
    cancelSeat.setAttribute("data-col", seatCol);
    editSeat.setAttribute("data-row", seatRow);
    editSeat.setAttribute("data-col", seatCol);
    currentDay = index + 1;
    seatNoOverlay.innerHTML =
      seatNo != ""
        ? "Date: " +
          (index + 1) +
          "/" +
          currentMonth +
          "/2022" +
          "<br>" +
          "Seat selected: " +
          seatNo
        : "No seat scheduled";

    seatOverlay.classList.remove("hide");
  });
});

const displayCalendar = () => {
  calendarMonth.innerHTML = currentMonth;
  const bookings = JSON.parse(localStorage.getItem("bookings"));

  dateCell.forEach((element, index) => {
    const day = index + 1;
    if (bookings !== null) {
      const seat =
        bookings[currentMonth] && bookings[currentMonth][day]
          ? bookings[currentMonth][day]
          : null;
      console.log(seat);
      const deskNo = seat ? seat.row + seat.col : "";
      if (seat !== null) {
        element.setAttribute("data-seat-row", seat.row);

        element.setAttribute("data-seat-col", seat.col);
      }
      if (seat !== null) {
        element.innerHTML = `${day}<br>${deskNo} `;
      } else {
        element.innerHTML = `${day}`;
      }
    }
  });
};
cancelSeat.addEventListener("click", (e) => {
  let bookings = localStorage.getItem("bookings");
  bookings = JSON.parse(bookings);

  const element = e.target;

  delete bookings[currentMonth][currentDay];

  localStorage.setItem("bookings", JSON.stringify(bookings));
  displayCalendar();
  seatOverlay.classList.add("hide");
});
const prevButton = document.querySelector(".prev-month");
const nextButton = document.querySelector(".next-month");
prevButton.addEventListener("click", () => {
  currentMonth -= 1;
  displayCalendar();
});
nextButton.addEventListener("click", () => {
  currentMonth += 1;
  displayCalendar();
});
displayCalendar();
// getBookings();
// console.log(bookings);
