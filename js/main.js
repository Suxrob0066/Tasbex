let counter = 0;

const counterDisplay = document.getElementById('counter-display');
const incrementButton = document.getElementById('increment-btn');
const resetButton = document.getElementById('reset-btn');


function updateCounterDisplay() {
  counterDisplay.textContent = counter;
}


incrementButton.addEventListener('click', () => {
  counter++;
  updateCounterDisplay();
});


resetButton.addEventListener('click', () => {
  counter = 0;
  updateCounterDisplay();
});
