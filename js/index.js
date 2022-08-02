import modifyDesk from "./deskApi.js";
import { addBooking } from "./bookingsData.js";
import { displayDesk, eventListeners, getRow, getCol } from "./deskLayout.js";
const locationElement = document.querySelector(".select-location");
const dateElement = document.querySelector(".select-date");
const deskElement = document.querySelector(".select-desk");
const seatElements = document.querySelectorAll(".seat");
let locationSelected = document.querySelector("#location");
let monthSelected;
let dateSelected = document.querySelector("#date-selected");
let locationValue = "Bangalore  ";
let monthValue;
let dateValue;
let deskRow;
let deskNumber;
let prevSelected;
const deskColor = {
  0: "red",
  1: "grey",
  2: "white",
  3: "green",
};

const Show = (element) => {
  element.classList.remove("hide");
};
const Hide = (element) => {
  element.classList.add("hide");
};
const submitLocation = document.querySelector(".submit-location");
const submitDate = document.querySelector(".submit-date");
const submitDesk = document.querySelector(".submit-desk");

submitLocation.addEventListener("click", (e) => {
  Hide(locationElement);
  Show(dateElement);
});

submitDate.addEventListener("click", (e) => {
  Hide(dateElement);
  Show(deskElement);

  let dateString = dateSelected.value;
  monthValue = dateString[5] + dateString[6];
  monthValue = parseInt(monthValue);
  dateValue = dateString[8] + dateString[9];
  dateValue = parseInt(dateValue);

  const blrData = JSON.parse(localStorage.getItem("blrData"));

  const deskLayout = blrData[monthValue][dateValue];
  displayDesk(deskLayout);
  eventListeners();
});

const HomePage = () => {
  locationValue = "";
  monthValue = "";
  dateValue = "";
  deskRow = "";
  deskNumber = "";
  Hide(deskElement);
  Show(locationElement);
};
submitDesk.addEventListener("click", (e) => {
  //   console.log("Form details");
  //   console.log("Location Selected:", locationValue);
  //   console.log("date selected:", dateValue, "/", monthValue, "/2022");
  //   console.log("seat selected", deskRow + deskNumber);
  let newBooking = {
    row: getRow(),
    col: getCol(),
    location: "Bangalore",
    month: monthValue,
    day: dateValue,
  };
  console.log(newBooking);
  addBooking(newBooking);
  modifyDesk(newBooking, 0);
  HomePage();
});
