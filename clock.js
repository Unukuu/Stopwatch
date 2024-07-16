const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
let millisecond = document.getElementById("millisecond");
let mlsecund = 0;
let secundNum = 0;
let minuteNum = 0;
let minute = document.getElementById("minute")
let secund = document.getElementById("secund");
let intervalID;
const innerTxt = document.getElementById("innerTxt");

startBtn.addEventListener("click", () => {
  intervalID = setInterval(() => {
    mlsecund += 10;
    millisecond.innerText = mlsecund;
    console.log("hi");
    if (mlsecund > 1000) {
      secundNum += 1;
      secund.innerText = secundNum;
      mlsecund = 0;
      if (secundNum > 60) {
      minuteNum += 1;
      minute.innerText = minuteNum
      secundNum = 0;
    }
    }
  });
});
resetBtn.addEventListener("click", () => {
  console.log("reset");
  mlsecund = 0;
  secundNum = 0;
  millisecond.innerText = "000";
  secund.innerText = "00";
  clearInterval(intervalID);
});
pauseBtn.addEventListener("click", () => {
  console.log("pause");
  clearInterval(intervalID);
});
