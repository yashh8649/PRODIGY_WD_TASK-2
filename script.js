let [milliseconds, seconds, minutes] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;

document.getElementById("start").onclick = () => {
  if (interval) return;
  interval = setInterval(startTimer, 10); // update every 10ms
};

document.getElementById("pause").onclick = () => {
  clearInterval(interval);
  interval = null;
};

document.getElementById("reset").onclick = () => {
  clearInterval(interval);
  interval = null;
  [milliseconds, seconds, minutes] = [0, 0, 0];
  display.innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
};

document.getElementById("lap").onclick = () => {
  let lapTime = display.innerText;
  let li = document.createElement("li");
  li.innerText = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(li);
};

function startTimer() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = Math.floor(milliseconds / 10);
  ms = ms < 10 ? "0" + ms : ms;
  display.innerText = `${m}:${s}:${ms}`;
}
