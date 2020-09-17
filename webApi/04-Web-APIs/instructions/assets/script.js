//hook elements from html page
var displayQuestionsEl = document.querySelector(".display-questions");
var timerEl = document.querySelector(".timer");
var resultsEl = document.querySelector(".results");

// create dynamic elements 
var mainDisplay = document.createElement("h3");
//create start quiz button
var startBtn = document.createElement("button");

//declare global variables
var timer = 60;

//variable to store current index
var index = 0;

//function that loads content when page first loads
function openingPage() {
  //add text to the h3 element
  mainDisplay.textContent = "Press the button to start";

  //add text to button
  startBtn.textContent = "Start";

  //append text and button to question container
  displayQuestionsEl.append(mainDisplay, startBtn);

}
//function that shows the question and starts the time
function startQuiz() {

  //show timer function
  showTimer();

  //call next question function
  nextQuestion();
}

//function that handles the timer
function showTimer() {
  //display timer to screen
  timerEl.textContent = timer;

  //create setInterval and store it in a variable
  var questionTimer = setInterval(function () {

    //decrease timer by 1
    timer--;

    //display timer to screen
    timerEl.textContent = timer;

    //if timer goes down to 0, clear interval
    if (timer <= 0) {
      clearInterval(questionTimer);
    }
  }, 1000);
}

//function that handles and displays the next question
function nextQuestion() {

  if (index >= questions.length || timer < 1 ) {
    endGame();

  }

  else {

    //declare a variable to store current question. Assign the current question.
    var currentQuestion = questions[index];

    //console.log current question
    console.log(currentQuestion);

    //empty question container element
    displayQuestionsEl.textContent = "";

    //add current question title to the main text display variable
    mainDisplay.textContent = currentQuestion.title;

    //append the main text display variable to the question container element
    displayQuestionsEl.append(mainDisplay);

    //create a div element to wrap the choices
    var choicesContainer = document.createElement("div");

    //use a loop to:
    for (let i = 0; i < currentQuestion.choices.length; i++) {

      //create button elements for each choice
      var choiceBtn = document.createElement("button");
      //add text to each button from question choices
      choiceBtn.textContent = currentQuestion.choices[i];
      //add a click event listener to button to check answers
      choiceBtn.addEventListener("click", checkAnswer);
      //append buttons to div element created to wrap choices
      choicesContainer.append(choiceBtn);

    }


    //append div element to the question container element 
    displayQuestionsEl.append(choicesContainer);

  }
}
//function to check the answer and display the follow question
function checkAnswer(event) {

  //LOGIC TO CHECK FOR RIGHT ANSWER

  //INCOMPLETE STOPPING POINT -LOGIC TO BE COMPLETED STILL
  var responseText = event.target.textContent;
  console.log(responseText);

  //if responseText = currentQuestion.answer then do something
  if (responseText === questions[index].answer) {
    console.log("correct");

  }

  // if responseText not equal to currentQuestion.answer(else), then take 10 seconds off timer
  else {
    console.log("incorrect");
    timer = timer - 5;
  }
  //increase index by 1
  index++;
  //show next question
  nextQuestion();
}
//TESTTESTTEST  //function that handles and displays the end game screen

function endGame() {


  //empty question container element
  displayQuestionsEl.textContent = "";

  //create new elements to appear on endGame page

  //create a header that says you score
  var score = displayQuestionsEl.textContent = document.createElement("h3");

  //create a form to input initials
  var initials = displayQuestionsEl.textContent = document.createElement("input");

  //create a button to submit
  var submitBtn = displayQuestionsEl.textContent = document.createElement("button")

  //add text to final score <p> tag
  score.textContent = "Your score is " + timer;

  //add text to initials form
  initials.textContent = "Initials";

  //add text to button
  submitBtn.textContent = "Submit";


   //create a div element to wrap the choices
   var endContainer = document.createElement("div");


  //append the variables to the question container element
  endContainer.append(score, initials, submitBtn);


  displayQuestionsEl.append(endContainer);

}



//add event listener
startBtn.addEventListener("click", startQuiz);
//calls openingPage function
openingPage();







