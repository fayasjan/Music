// VARIABLE: Store the number of drum buttons on the page
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// LOOP: Go through each drum button
for (var i = 0; i < numberOfDrumButtons; i++) {

  // EVENT LISTENER: Add click event to each drum button
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // this = the button that was clicked
    // VARIABLE: Get the inner text of clicked button (like "w", "a", etc.)
    var buttonInnerHTML = this.innerHTML;

    // FUNCTION CALL: Play sound for that button
    makeSound(buttonInnerHTML);

    // FUNCTION CALL: Animate the button (visual effect)
    buttonAnimation(buttonInnerHTML);

  }); // End of click event function

} // End of for loop

// EVENT LISTENER: Listen for keypress on keyboard
document.addEventListener("keypress", function(event) {

  // FUNCTION CALL: Play sound for pressed key
  makeSound(event.key);

  // FUNCTION CALL: Animate the button for that key
  buttonAnimation(event.key);

}); // End of keypress event function

// FUNCTION: Play different drum sounds based on key
function makeSound(key) {

  // SWITCH-CASE: Match key to correct drum sound
  switch (key) {

    case "w": // if key is "w"
      // OBJECT + METHOD: Create audio object and play sound
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;

    case "a": // if key is "a"
      var tom2 = new Audio("sounds/kick-bass.mp3");
      tom2.play();
      break;

    case "s": // if key is "s"
      var tom3 = new Audio('sounds/snare.mp3');
      tom3.play();
      break;

    case "d": // if key is "d"
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j": // if key is "j"
      var snare = new Audio('sounds/tom-3.mp3');
      snare.play();
      break;

    case "k": // if key is "k"
      var crash = new Audio('sounds/tom-2.mp3');
      crash.play();
      break;

    case "l": // if key is "l"
      var kick = new Audio('sounds/tom-1.mp3');
      kick.play();
      break;

    default: // if none of the above keys match
      console.log(key); // Print the key to the console
  }

} // End of makeSound function

// FUNCTION: Add animation effect when button is pressed
function buttonAnimation(currentKey) {

  // VARIABLE: Select button using class name (e.g., ".w")
  var activeButton = document.querySelector("." + currentKey);

  // METHOD: Add CSS class "pressed" to show animation
  activeButton.classList.add("pressed");

  // FUNCTION (setTimeout): Remove "pressed" class after 100ms
  setTimeout(function() {
    activeButton.classList.remove("pressed"); // Remove effect
  }, 100); // Delay in milliseconds

} // End of buttonAnimation function
