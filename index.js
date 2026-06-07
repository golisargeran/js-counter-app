//counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

function updateLabel() {
    countLabel.textContent = count;
  if (count < 0) {
    countLabel.classList.add("negative");
  } else {
    countLabel.classList.remove("negative");
  }
}



increaseBtn.onclick = function() {
    count++;
    updateLabel();
}
resetBtn.onclick = function() {
    count = 0;
    updateLabel();
}
decreaseBtn.onclick = function() {
    count--;
    updateLabel();
}