import { bangaloreData } from "./data.js";
const locationElement = document.querySelector(".select-location");
const dateElement = document.querySelector(".select-date");
const deskElement = document.querySelector(".select-desk");
const seatElements = document.querySelectorAll(".seat");
let locationSelected = document.querySelector("#location");
let monthSelected;
let dateSelected = document.querySelector("#date-selected");

const Show = (element) => {
  element.classList.remove("hide");
};
const Hide = (element) => {
  element.classList.add("hide");
};
const submitLocation = document.querySelector(".submit-location");
const submitDate = document.querySelector(".submit-date");
const submitDesk = document.querySelector(".submit-desk");
//console.log(submitLocation);
submitLocation.addEventListener("click", (e) => {
  //console.log(locationSelected.value);
  //console.log("hello");
  Hide(locationElement);
  Show(dateElement);
});
submitDate.addEventListener("click", (e) => {
  // dateSelected = e.target.value;
  // console.log(date);
  Hide(dateElement);
  Show(deskElement);

  let dateString = dateSelected.value;
  monthValue = dateString[5] + dateString[6];
  monthValue = parseInt(monthValue);
  dateValue = dateString[8] + dateString[9];
  dateValue = parseInt(dateValue);

  const deskLayout = bangaloreData[monthValue][dateValue];

  const deskColor = {
    0: "red",
    1: "grey",
    2: "white",
    3: "green",
  };
  for (let row in deskLayout) {
    deskLayout[row].forEach((element, index) => {
      //console.log(typeof element);
      const i = index + 1;
      const elementString = i.toString(10);
      // console.log(elementString);
      const desk = document.querySelectorAll(
        `[data-number="${elementString}"].${row}`
      );
      desk[0].style.backgroundColor = deskColor[element];
    });
  }
});
submitDesk.addEventListener("click", (e) => {
  // dateSelected = e.target.value;
  // console.log(date);

  console.log("Form details");
  console.log("Location Selected:", locationValue);
  console.log("date selected:", dateValue, "/", monthValue, "/2022");
  console.log("seat selected", deskRow + deskNumber);
  alert("desk selected");
});

let locationValue;
let monthValue;
let dateValue;
let deskRow;
let deskNumber;

seatElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    // dateSelected = e.target.value;
    // console.log(date);
    console.log(e.target);
    let prevColor = e.target.style.backgroundColor;
    if (prevColor == "white") {
      locationValue = locationSelected.value;
      console.log(e.target);

      let deskString = e.target.innerText;
      deskRow = deskString[0];
      let lengthString = deskString.length;
      deskNumber = parseInt(deskString.slice(1, lengthString));

      //   e.target.removeEventListener(mouseEnterEl);
      //   e.target.removeEventListener(mouseLeaveEl);
      e.target.style.backgroundColor = "green";
      //  console.log(e.target);
    }
  });
});
// const mouseEnterEl = seatElements.forEach((element) => {
//   element.addEventListener("mouseenter", (e) => {
//     let prevColor = e.target.style.backgroundColor;
//     if (prevColor == "white") e.target.style.backgroundColor = "green";
//   });
// });
// const mouseLeaveEl = seatElements.forEach((element) => {
//   element.addEventListener("mouseleave", (e) => {
//     let prevColor = e.target.style.backgroundColor;
//     if (prevColor == "green") e.target.style.backgroundColor = "white";
//   });
// });

export { locationValue, dateValue, monthValue, deskNumber, deskRow };
