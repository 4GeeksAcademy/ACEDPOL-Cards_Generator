/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var iconsArray,
  number,
  pokerCard,
  widthRange,
  heightRange,
  initialWidth,
  initialHeight,
  resetButton,
  createButton;

window.onload = function() {
  //write your code here
  console.log("This is the Cards Generator app!");

  // Variables de componentes de la carta
  var icons = document.getElementsByTagName("card-suit");
  iconsArray = Array.prototype.slice.call(icons);
  number = document.getElementsByTagName("card-number")[0];

  // Variables para hacer la carta interactiva
  pokerCard = document.getElementsByTagName("poker-card")[0];
  pokerCard.addEventListener("click", () => generateCard());
  generateCard(); // generates a new card

  // Variables para modificar el tamaño de la carta
  var vrem = parseFloat(window.getComputedStyle(document.body).fontSize);
  widthRange = document.getElementById("widthRange");
  initialWidth = pokerCard.clientWidth / vrem;
  widthRange.value = initialWidth;
  heightRange = document.getElementById("heightRange");
  initialHeight = pokerCard.clientHeight / vrem;
  heightRange.value = initialHeight;

  widthRange.addEventListener("input", () => resize());
  heightRange.addEventListener("input", () => resize());

  // Método para generar el temporizador: 10000ms = 10seg
  createInterval();

  // Variables para los botones extra: resetSize
  resetButton = document.getElementById("resetSizeBtn");
  resetButton.addEventListener("click", () => resetSize());
  createButton = document.getElementById("createCardBtn");
  createButton.addEventListener("click", () => generateCard());
};

function createInterval() {
  setTimeout(generateCard, 10000);
  setTimeout(createInterval, 10000);
}

function generateCard() {
  // suit => { ♦ ♥ ♠ ♣ }
  var suit = Math.floor(Math.random() * 4) + 1;
  var num = Math.floor(Math.random() * 13) + 1;

  setSuit(suit); // sets the symbol and the color
  setNumber(num); // sets the number or the letter as necessary
}

function setSuit(suit) {
  switch (suit) {
    case 1:
      iconsArray.forEach(icon => {
        icon.innerHTML = "♦";
        icon.className = "text-danger";
        number.className = "text-danger";
        if (icon.id === "second") {
          icon.className = icon.className + " float-end";
        }
      });
      break;
    case 2:
      iconsArray.forEach(icon => {
        icon.innerHTML = "♥";
        icon.className = "text-danger";
        number.className = "text-danger";
        if (icon.id === "second") {
          icon.className = icon.className + " float-end";
        }
      });
      break;
    case 3:
      iconsArray.forEach(icon => {
        icon.innerHTML = "♠";
        icon.className = "text-dark";
        number.className = "text-dark";
        if (icon.id === "second") {
          icon.className = icon.className + " float-end";
        }
      });
      break;
    case 4:
      iconsArray.forEach(icon => {
        icon.innerHTML = "♣";
        icon.className = "text-dark";
        number.className = "text-dark";
        if (icon.id === "second") {
          icon.className = icon.className + " float-end";
        }
      });
      break;
    default:
      break;
  }
}

function setNumber(num) {
  if (num > 1 && num < 11) {
    number.innerHTML = num;
  } else if (num === 1) {
    number.innerHTML = "A";
  } else if (num === 11) {
    number.innerHTML = "J";
  } else if (num === 12) {
    number.innerHTML = "Q";
  } else if (num === 13) {
    number.innerHTML = "K";
  }
}

function resize() {
  pokerCard.style.width = widthRange.value + "rem";
  pokerCard.style.height = heightRange.value + "rem";
}

function resetSize() {
  pokerCard.style.width = initialWidth + "rem";
  pokerCard.style.height = initialHeight + "rem";
  widthRange.value = initialWidth;
  heightRange.value = initialHeight;
}
