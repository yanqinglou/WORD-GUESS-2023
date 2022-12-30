var gameStart = alert("Would you like to play a round of word gussing game?");


//choose yes to load the game page
// if (gameStart) {
//     function () {

//     }
// }

//when click on start button, timer starts to run
var startButton = document.querySelector(".button");

//display time left
var timeEl = document.querySelector("#countDown");

startButton.addEventListener("click", function(event) {
    var element = event.target;
  
    if (element.matches(".button")) {
      setTime();
    }
})   

function setTime() {
    var secondsLeft = 10;
// Sets interval in variable
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + "s";
  
      if (secondsLeft < 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        secondsLeft = 10;
        // Calls function to create and append image
        timeEl.textContent = secondsLeft + "s";
        alert("Times up. Ready for the next word?");
      }
    }, 1000);
  };