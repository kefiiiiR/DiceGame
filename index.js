function diceGame() {
//Variables for Dice 1
var randomNumber1 = (Math.floor(Math.random()*6) + 1);
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImgSource1 = "images/" + randomImage1;

//Variables for Dice 2
var randomNumber2 = (Math.floor(Math.random()*6) + 1);
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImgSource2 = "images/" + randomImage2;

//Random Dice Numbers - Dice 1
document.querySelectorAll("img")[0].setAttribute("src", randomImgSource1);

//Random Dice Numbers - Dice 1
document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

//Calling a winner
 if (randomNumber1 > randomNumber2) {
   document.querySelector("#winner").innerHTML = "🚩 Player 1 wins!";
   document.querySelector("#winner").classList.add("h1-size");
 } else if (randomNumber1 < randomNumber2) {
   document.querySelector("#winner").innerHTML = "Player 2 wins! 🚩";
   document.querySelector("#winner").classList.add("h1-size");
 } else {
   document.querySelector("#winner").innerHTML = "DRAW!";
   document.querySelector("#winner").classList.add("h1-size");
 }
}
