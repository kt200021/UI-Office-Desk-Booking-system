const selectedLocation = document.querySelector(".select-location");
const selectedDate = document.querySelector(".select-date");
const selectedDesk = document.querySelector(".select-desk");

const show = (element) => {
  element.classList.remove("hide");
};
const hide = (element) => {
  element.classList.add("hide");
};
const submitLocation = document.querySelector(".submit-location");
const submitDate = document.querySelector(".submit-date");
console.log(submitLocation);
submitLocation.addEventListener("click", () => {
  hide(selectedLocation);
  show(selectedDate);
});
submitDate.addEventListener("click", () => {
  hide(selectedDate);
  show(selectedDesk);
});
