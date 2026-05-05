let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let guess = Number(document.getElementById("guessInput").value);
  let message = document.getElementById("message");
  let attemptsText = document.getElementById("attempts");

  attempts++;

  if (guess === randomNumber) {
    message.textContent = "مبروك! خمنت الرقم الصحيح";
  } else if (guess > randomNumber) {
    message.textContent = "الرقم أصغر";
  } else {
    message.textContent = "الرقم أكبر";
  }

  attemptsText.textContent = "عدد المحاولات: " + attempts;
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
}