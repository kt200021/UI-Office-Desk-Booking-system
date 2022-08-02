const deskColor = {
  0: "red",
  1: "grey",
  2: "white",
  3: "green",
};
const displayDesk = (deskLayout) => {
  for (let row in deskLayout) {
    const rowSection = document.querySelector(`.row-${row}`);
    // console.log(row);
    deskLayout[row].forEach((element, i) => {
      const seat = document.createElement("div");
      seat.innerText = row + (i + 1);
      seat.classList.add(`seat`);
      seat.classList.add(`${row}`);
      seat.classList.add(`${row}-${i + 1}`);
      seat.setAttribute("data-number", i);
      seat.setAttribute("data-color", element);
      seat.style.backgroundColor = deskColor[element];
      rowSection.appendChild(seat);
    });
  }
};
let prevSelected;
let deskRow;
let deskNumber;
let locationValue;
let locationSelected = "Bangalore";
const eventListeners = () => {
  const deskElement = document.querySelector(".select-desk");
  const seatElements = document.querySelectorAll(".seat");
  deskElement.addEventListener("click", (e) => {
    // console.log("hello");
    if (e.target.classList.contains("seat")) {
      let prevColor = e.target.getAttribute("data-color");
      // console.log(prevColor);
      if (prevColor != 0 && prevColor != 1) {
        //  locationValue = locationSelected.value;
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
      }
    }
    //  console.
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
};

const getRow = () => {
  console.log(deskRow);
  return deskRow;
};
const getCol = () => {
  console.log(deskNumber);
  return deskNumber;
};
export { displayDesk, eventListeners, getRow, getCol };
