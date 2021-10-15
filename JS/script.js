// // const getDateAndTime = document.getElementById("date");

// const getDateAndTime = () => {
//   let dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
//   dateElement.innerHTML = dateAndTime;
// };
// add global declarations
const timeBlockLabels = [
  {
    timeBlockLabel: "09:00",
    localStorageKey: 9,
  },
  {
    timeBlockLabel: "10:00",
    localStorageKey: 10,
  },
  {
    timeBlockLabel: "11:00",
    localStorageKey: 11,
  },
  {
    timeBlockLabel: "12:00",
    localStorageKey: 12,
  },
  {
    timeBlockLabel: "13:00",
    localStorageKey: 13,
  },
  {
    timeBlockLabel: "14:00",
    localStorageKey: 14,
  },
  {
    timeBlockLabel: "15:00",
    localStorageKey: 15,
  },
  {
    timeBlockLabel: "16:00",
    localStorageKey: 16,
  },
  {
    timeBlockLabel: "17:00",
    localStorageKey: 17,
  },
];

// declare render timeblocks
const renderTimeblocks = function () {};
// declare on load event handler function
const onLoad = function () {
  console.log("bob");
};
// add on load event listener
$(document).ready(onLoad);
