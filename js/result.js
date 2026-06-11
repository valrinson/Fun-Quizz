const score = Number(localStorage.getItem("score")) || 0;

const total = 25;

const wrong = total - score;

const percentage =
Math.round((score / total) * 100);

document.getElementById("percentage").innerText =
percentage + "%";

document.getElementById("total").innerText =
total;

document.getElementById("correct").innerText =
score;

document.getElementById("wrong").innerText =
wrong;