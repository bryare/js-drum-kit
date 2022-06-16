/*  This works but only for the first button that is grabbed by the query selector*/
// document.querySelector("button")addEventListener("click", function () {
//   alert("I got clicked!");
// });

// This works but only for the button with class a.
// document.querySelector("button.a").addEventListener("click", function () {
//   alert("I got clicked!");

// This works using a forEach loop which I have not yet learned
// document.querySelectorAll("button").forEach((item) => {
//   item.addEventListener("click", (event) => {
//     alert(" got clicked!");
//   });
// });

// This works but it is not conversational enough, too ambiguous
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         alert("I got clicked!.")
//     })
// }

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got clicked!");
//   });
// }

// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  // console.log(activeButton);

  // check classList of an item, then add a class to it
  activeButton.classList.add("pressed");
  // activeButton.setAttribute("class", "pressed"); didnt work

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// for (var i = 0; i < numberOfDrumButtons; i++) {
//   document.addEventListener("keydown", function (event) {
//     switch (event.key) {
//       case "w":
//         var tom1 = new Audio("./sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         var tom2 = new Audio("./sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         var tom3 = new Audio("./sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         var tom4 = new Audio("./sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         var snare = new Audio("./sounds/snare.mp3");
//         snare.play();
//         break;
//       case "k":
//         var crash = new Audio("./sounds/crash.mp3");
//         crash.play();
//         break;
//       case "l":
//         var kick = new Audio("./sounds/kick-bass.mp3");
//         kick.play();
//         break;

//       default:
//         console.log(event.key);
//         break;
//     }
//   });
// }
