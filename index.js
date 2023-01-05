// Here we set what happens when one of the buttons gets clicked.

var buttons = document.querySelectorAll(".drum").length;
/*First, we pretend to set a variable that contains the number of buttons.
and select them by its class ".drum" to make it more specific.
*/
for (var i = 0; i < buttons; i++) {
/* this "for" statement sets that the variable "i" is equal to "0"
that is the first button, and it needs to be less than the total number of elements
given by "buttons" variable, the instruction is to increase that number until the
statement becomes false.

This statement is used to decrease the number of lines dedicated to the event when
one of the buttons gets clicked.
*/
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
/* Then, we select the button and target the index "[i]" to add an event listener
when it gets clicked, the anonymous function indicates that the variable
"buttonInnerHTML" is the innerHTML of the element selected with the event listener.
*/
  var buttonInnerHTML = this.innerHTML;
/*This instruction receives the innerHTML of the button clicked and as it got
received, we proceed to activate the next function:
*/
  makeSound(buttonInnerHTML);

  });

}

// here we set what happens when one of the letters inside the buttons gets pressed on a keyboard.

document.addEventListener("keydown", function(event) {
/*here we put to all the document an event listener to respond to an "keydown"
action, and when it activates, we begin the function as an event for the key.
*/
    makeSound(event.key);
/*In this case, when the letter gets pressed, we activate the event(key) with
the key given.
*/
});

function makeSound(key){
/*This function indicates that when the key gets pressed or clicked, it sould
show as an output a specific sound.
*/
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
/*Consequently, the key given will be passing by the instruction of the switch
statement that sets an action when it receives the letter, in this case, we
created a variable that stores the audio of the instrument, and then we tell it
to play that variable.it keep on with the break statement that gets activated if
the letter given doesn't match.
*/
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
/*at the end if the letter if different than the written ones, we store them in
the console.log for not leaving loose ends and keep it clean.
*/
  }
}
