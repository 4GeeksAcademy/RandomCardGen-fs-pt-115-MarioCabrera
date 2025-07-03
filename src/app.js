import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const randSuit = () => {
    let randomSuit = Math.floor(Math.random() * 4)
    return randomSuit
  }
  const randNum = () => {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber == 1) return "A"
    if (randomNumber == 11) return "J"
    if (randomNumber == 12) return "Q"
    if (randomNumber == 13) return "K"
    return randomNumber
  }
  const selectCard = () => {
    let suit = randSuit();
    document.querySelectorAll(".card").forEach(card => {
      card.classList.add("d-none");
    });
    switch (suit) {
      case 0:
        document.querySelector(".hearts").classList.remove("d-none")
        break
      case 1:
        document.querySelector(".clubs").classList.remove("d-none")
        break
      case 2:
        document.querySelector(".diamonds").classList.remove("d-none")
        break
      case 3:
        document.querySelector(".spades").classList.remove("d-none")
        break
    }
    const newNumber = document.querySelectorAll('.number');
    document.getElementById("start").innerHTML = "RESTART"
    newNumber.forEach((element) => {
      element.innerHTML = randNum();
    });
    startCount()

  }
  let timeout;
  let timer_on = 0;

  function timedCount() {
    timeout = setTimeout(selectCard, 10000);
  }

  function startCount() {
    clearTimeout(timeout);
    timedCount();
  }

  document.getElementById("start").addEventListener("click", (element) => {
    selectCard()
    startCount()
  })
};