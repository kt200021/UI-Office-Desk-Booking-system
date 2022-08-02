import modifyDesk from "./deskApi.js";
import { addBooking } from "./bookingsData.js";

const locationElement = document.querySelector(".select-location");
const dateElement = document.querySelector(".select-date");
const deskElement = document.querySelector(".select-desk");
const seatElements = document.querySelectorAll(".seat");
let locationSelected = document.querySelector("#location");
let monthSelected;
let dateSelected = document.querySelector("#date-selected");
let locationValue;
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
  console.log(deskLayout);
  for (let row in deskLayout) {
    deskLayout[row].forEach((element, index) => {
      const i = index + 1;
      const elementString = i.toString(10);

      const desk = document.querySelectorAll(
        `[data-number="${elementString}"].${row}`
      );

      desk[0].style.backgroundColor = deskColor[element];
      desk[0].setAttribute("data-color", element);
    });
  }
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
  console.log("Form details");
  console.log("Location Selected:", locationValue);
  console.log("date selected:", dateValue, "/", monthValue, "/2022");
  console.log("seat selected", deskRow + deskNumber);
  let newBooking = {
    row: deskRow,
    col: deskNumber,
    location: locationValue,
    month: monthValue,
    day: dateValue,
  };
  addBooking(newBooking);
  modifyDesk(newBooking);
  HomePage();
});

seatElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    let prevColor = e.target.getAttribute("data-color");
    // console.log(prevColor);
    if (prevColor != 0 && prevColor != 1) {
      locationValue = locationSelected.value;

      let deskString = e.target.innerText;
      deskRow = deskString[0];
      let lengthString = deskString.length;
      deskNumber = parseInt(deskString.slice(1, lengthString));

      e.target.style.backgroundColor = deskColor[3];
      e.target.setAttribute("data-color", 3);
      if (prevSelected !== undefined) {
        prevSelected.style.backgroundColor = deskColor[2];
        //  console.log(prevSelected);
        prevSelected.setAttribute("data-color", 2);
      }

      prevSelected = e.target;
      //  console.log(e.target);
    }
  });
});
const mouseEnterEl = seatElements.forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    let prevColor = e.target.getAttribute("data-color");

    if (prevColor == 2) {
      e.target.style.backgroundColor = deskColor[3];
      e.target.setAttribute("data-color", 3);
    }
  });
});
const mouseLeaveEl = seatElements.forEach((element) => {
  element.addEventListener("mouseleave", (e) => {
    let prevColor = e.target.getAttribute("data-color");
    if (prevColor == 3 && prevSelected !== e.target) {
      e.target.style.backgroundColor = deskColor[2];
      e.target.setAttribute("data-color", 2);
    }
  });
});

export { locationValue, dateValue, monthValue, deskNumber, deskRow };
