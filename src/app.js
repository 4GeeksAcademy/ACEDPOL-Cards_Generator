/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var icons, number;

window.onload = function() {
  //write your code here
  console.log("This is the Cards Generator app!");
  // recoge las variables
  icons = document.getElementsByTagName("card-suit");
  number = document.getElementsByClassName("card-number");
};

function generateCard() {
  // suit => { ♦ ♥ ♠ ♣ }
  var suit = Math.floor(Math.random() * 4) + 1;
  var number = Math.floor(Math.random() * 13) + 1;
}
