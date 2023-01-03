var gameStart = alert("Would you like to play a round of word gussing game?");
//to define if the game is playing
var isPlaying = false;
var wordPool = [
  "champagne",
  "sparkling",
  "wine",
  "cidar",
  "celebration",
  "philosophy",
  "orchard",
  "apple",
  "cinnamon",
  "bite",
  "holiday",
  "christmas",
  "ornament",
];
var numberofPool, wordChosen;
var nohidden, hiddenNo, hiddenl;
var letterInput;
var startButton = document.querySelector(".startbutton");
var nextButton = document.querySelector(".nextbutton");
var wordinGame = [];
var hiddenWords = { letter: "", order: "" };

var wins = localStorage.getItem("wins");
var losses = localStorage.getItem("losses");

//display time left
var timeEl = document.querySelector("#countDown");

//record key down action
document.addEventListener("keydown", keydownAction);

//start button to start game and count down
startButton.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches(".startbutton")) {
    setTime();
    startaround();
  }
});

//next button to next game
nextButton.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches(".nextbutton")) {
    wordinDisplay = [];
    setTime();
    startaround();
  }
});

//set the count donwn 15s
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
      //Clear existing word
      // for (var a = 0; a < wordChosen.length; a++) {
      //   clearBox();
      // }
    }
  }, 1000);
}

//Start a round of game and decide on blanks based on word length
function startaround() {
  numberofPool = Math.floor(Math.random() * wordPool.length);
  //select a word from the pool randomly and split it into letters
  wordChosen = wordPool[numberofPool].split("");
  generateword();

  //number of hidden letter(s)
  if (wordChosen.length <= 4) {
    nohidden = 1;
    displayword();
  }

  if (wordChosen.length > 4 && wordChosen.length < 9) {
    nohidden = 2;
    displayword();
  }

  if (wordChosen.length >= 9) {
    nohidden = 3;
    displayword();
  }

  answercheck();
}

//generate word with blanks
function generateword() {
  for (var i = 0; i < wordChosen.length; i++) {
    //Create h1 Element
    h1 = document.createElement("h1");
    h1.textContent = wordChosen[i];
    //Append letters of the word to ul
    document.body.children[1].children[0].children[0].appendChild(h1);
    h1.setAttribute("id", "wordh1");
  }
}

//hide random letters of a word
function displayword() {
  for (var h = 1; h <= nohidden; h++) {
    hiddenNo = Math.floor(Math.random() * wordChosen.length);
    hiddenl = document.body.children[1].children[0].children[0].children[hiddenNo].textContent;
    console.log(hiddenl);
    hiddenWords.letter = hiddenl;
    hiddenWords.order = hiddenNo;
    console.log(hiddenWords);
    wordinGame.push(hiddenWords);
    console.log(wordinGame);
    document.body.children[1].children[0].children[0].children[hiddenNo].textContent = "_";
  }
}

//clear content function
function clearBox() {
  document.getElementById("wordh1").remove();
}

//1.record key event
function keydownAction(event) {
  // The key property holds the value of the key press
  var keyPress = event.key;
  console.log(keyPress);
  // The code property holds the key's code
  var keyCode = event.code;
  // Updates content on page
}

//verifying answer
function answercheck(){
  for (var b = 0; b < hiddenWords.length; b++) {
    if (keyPress === wordinGame[b].letter) {
      document.body.children[1].children[0].children[0].children[wordinGame[b].order].textContent = keyPress;
    }
  }
}


//2.

//keeping score
