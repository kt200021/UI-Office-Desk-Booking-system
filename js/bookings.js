import { displayDesk, eventListeners, getRow, getCol } from "./deskLayout.js";
import modifyDesk from "./deskApi.js";
import { addBooking, deleteBooking } from "./bookingsData.js";
let currentDate, currentMonth;
currentMonth = new Date().getMonth() + 1;
const deskOverlay = document.querySelector(".desk-overlay");
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
      //console.log(seat);
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

  let cancelledBooking = {
    row: e.target.getAttribute("data-row"),
    col: e.target.getAttribute("data-col"),
    location: "Bangalore",
    month: currentMonth,
    day: currentDay,
  };
  console.log(cancelledBooking);
  deleteBooking(currentMonth, currentDay);
  modifyDesk(cancelledBooking, 2);

  displayCalendar();
  seatOverlay.classList.add("hide");
});
editSeat.addEventListener("click", (e) => {
  const blrData = JSON.parse(localStorage.getItem("blrData"));

  const deskLayout = blrData[currentMonth][currentDay];
  deskOverlay.classList.remove("hide");
  seatOverlay.classList.add("hide");
  displayDesk(deskLayout);
  eventListeners();
  const cancelledBooking = {
    row: e.target.getAttribute("data-row"),
    col: e.target.getAttribute("data-col"),
    location: "Bangalore",
    month: currentMonth,
    day: currentDay,
  };
  const submitDesk = document.querySelector(".submit-desk");
  submitDesk.addEventListener("click", (e) => {
    //   console.log("Form details");
    //   console.log("Location Selected:", locationValue);
    //   console.log("date selected:", dateValue, "/", monthValue, "/2022");
    //   console.log("seat selected", deskRow + deskNumber);

    console.log(cancelledBooking);
    const newBooking = { ...cancelledBooking, row: getRow(), col: getCol() };
    console.log(newBooking);
    deleteBooking(currentMonth, currentDay);
    modifyDesk(cancelledBooking, 2);
    addBooking(newBooking);
    modifyDesk(newBooking, 0);

    deskOverlay.classList.add("hide");
    location.reload();
  });
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
