const deskColor = {
  0: "red",
  1: "grey",
  2: "white",
  3: "green",
};

let deskRow;
let deskNumber;
let locationValue;
const displayDesk = (deskLayout) => {
  deskNumber = "";
  deskRow = "";
  for (let row in deskLayout) {
    const rowSection = document.querySelector(`.row-${row}`);
    rowSection.innerHTML = "";
    // console.log(row);
    deskLayout[row].forEach((element, i) => {
      const seat = document.createElement("div");
      const text = document.createElement("span");
      text.innerText = row + (i + 1);
      text.classList.add("seat-text");
      seat.append(text);
      // console.log(seat);
      seat.classList.add(`seat`);
      seat.classList.add(`${row}`);
      seat.classList.add(`${row}-${i + 1}`);
      seat.setAttribute("data-number", i + 1);
      seat.setAttribute("data-color", element);
      seat.style.backgroundColor = deskColor[element];
      rowSection.appendChild(seat);
    });
  }
};

let locationSelected = "Bangalore";
const eventListeners = () => {
  let prevSelected;
  const deskElement = document.querySelector(".select-desk");
  const seatElements = document.querySelectorAll(".seat");
  console.log(prevSelected);
  deskElement.addEventListener("click", (e) => {
    // console.log("hello");
    if (e.target.classList.contains("seat")) {
      let prevColor = e.target.getAttribute("data-color");

      if (prevColor != 0 && prevColor != 1) {
        //  locationValue = locationSelected.value;
        let deskString = e.target.innerText;
        deskRow = deskString[0];
        let lengthString = deskString.length;
        deskNumber = parseInt(deskString.slice(1, lengthString));
        // console.log("i am in");
        e.target.style.backgroundColor = deskColor[3];
        e.target.setAttribute("data-color", 3);
        //   console.log(prevSelected);
        if (prevSelected !== undefined && prevSelected !== "") {
          prevSelected.style.backgroundColor = deskColor[2];
          //  console.log(prevSelected);
          prevSelected.setAttribute("data-color", 2);
        }
        console.log(e.target.getAttribute("data-color"));
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
      } else {
        // console.log(prevSelected, e.target);
        //console.log("failed");
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
