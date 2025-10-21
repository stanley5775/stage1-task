// Update and display current time in milliseconds
const timeElement = document.getElementById("currentTime");

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
