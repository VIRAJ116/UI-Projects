const startInput = document.getElementById("startInput");
const endInput = document.getElementById("endInput");
const startBtn = document.getElementById("btn-start");
const captureBtn = document.getElementById("btn-capture");
const captureList = document.querySelector(".time-lapse");
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

let startTimeStamp = null;
let timerInterval = null;
let timeDifference = null;
let timerRunning = false;

// capture time event
captureBtn.addEventListener("click", () => {
  if (timerRunning) {
    let capturedTime = hourElement.textContent + ` ` + minuteElement.textContent + ` ` + secondElement.textContent;
    console.log(capturedTime);
    var li = document.createElement("li");
    li.innerHTML = capturedTime;
    captureList.appendChild(li);
  }
});

// startStopWatch function => start stopWatch
function startStopWatch() {
  clearInterval(timerInterval);

  // Start the stopwatch timer
  startTimeStamp = Date.now();
  timerRunning = true;
  captureList.innerHTML = "";
  updateTimer(); // Update timer immediately
  timerInterval = setInterval(updateTimer, 1000);
}

// start button time event
startBtn.addEventListener("click", () => {
  const startTime = startInput.value;
  const endTime = endInput.value;

  if (startTime === "" || endTime === "") {
    alert("Both start and end times must be filled!");
  } else {
    const today = new Date();

    const startTimestamp = new Date(today.toDateString() + " " + startTime).getTime();
    const endTimestamp = new Date(today.toDateString() + " " + endTime).getTime();
    timeDifference = endTimestamp - startTimestamp;

    if (timeDifference >= 0) {
      var timeout = startTimestamp - Date.now();
      if (timeout >= 0) {
        setTimeout(() => {
          startStopWatch();
        }, timeout);
      } else {
        alert("Please enter the valid time");
      }
    } else {
      alert("Please enter the valid time");
    }
  }
});

// update time
function updateTimer() {
  const currentTimeStamp = Date.now();
  const elapsedTime = currentTimeStamp - startTimeStamp;
  if (timeDifference - elapsedTime >= -1000) {
    const hours = Math.floor(elapsedTime / 60000 / 60);
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);

    hourElement.textContent = hours.toString().padStart(2, "0") + `:`;
    minuteElement.textContent = minutes.toString().padStart(2, "0") + `:`;
    secondElement.textContent = seconds.toString().padStart(2, "0");
  } else {
    clearInterval(timerInterval);
    timerRunning = false;
  }
}