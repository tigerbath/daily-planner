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
const renderTimeblocks = function () {
  const callbackFn = function (element) {
    // construct timeblock
    const timeblock = `<div id="hours" class="row time-block">
    <div class="col-md-1 hour">${element.timeBlockLabel}</div>
    <textarea class="col-md-10 inputtedactivites">
Add tasks Here...</textarea
    >
    <button class="col-md-1 saveBtn"><i class="fas fa-archive"></i></button>
  </div>`;
    return timeblock;
  };

  //map timeblock labels
  const timeBlocks = timeBlockLabels.map(callbackFn).join("");
  // append timeblocks to container
  $(".container").append(timeBlocks);
};
// declare on load event handler function
const onLoad = function () {
  renderTimeblocks();
};
// add on load event listener
$(document).ready(onLoad);
