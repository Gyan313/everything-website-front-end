var randomNumber1 = Math.trunc(Math.random() * 6) + 1; //this is going to give us a random no. between 1 to 6

var randomNumber2 = Math.trunc(Math.random() * 6) + 1; //this is going to give us a random no. between 1 to 6

document
  .querySelector("img")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");

document
  .querySelectorAll("img")[1]
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Win 🚩";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw !";
} else {
  document.querySelector("h1").textContent = "🚩 Player 2 Win";
}
