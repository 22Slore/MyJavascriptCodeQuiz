//acceptance criteria
    /*AS A coding boot camp student
    I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
    SO THAT I can gauge my progress compared to my peers

    GIVEN I am taking a code quiz
    WHEN I click the start button
    THEN a timer starts and I am presented with a question
    WHEN I answer a question
    THEN I am presented with another question
    WHEN I answer a question incorrectly
    THEN time is subtracted from the clock
    WHEN all questions are answered or the timer reaches 0
    THEN the game is over
    WHEN the game is over
    THEN I can save my initials and score*/


//use get element by class to change display to display initial (assign as variable)
var startPage = document.querySelector('.HiddenVar') 

//define variables
var startBtn = document.querySelector("#startBtn");
var counterDiv = document.querySelector("#counter");
var questionDiv = document.querySelector(".questionDiv");
var introPage = document.querySelector(".introPage");
var questionMain = document.querySelector("#questionMain");
var ulQuestions = document.querySelector(".ulQuestions");
var questionIndex = 0;


//define variables for timer
var secondsLeft = 60;
var questionNumber = 0;
var questionCount = 1;
var totalScore = 0;


//defines questions (object)
var questionList = [
    {
        question: "Commonly Used data types do not include",
        choices: [" a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "d"
    },

    {
        question: "Arrays in javascript can be used to store __",
        choices: ["a. variables", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "d"
    },

    {
        question: "string values must be enclosed within _ when being assigned to variables",
        choices: ["a. parenthesis", "b. curly brackets", "c. quotes", "d. semicolons"],
        answer: "a"
    },

    {
        question: "The conditions in an if-else statement are enclosed within __",
        choices: ["a. parenthesis", "b. curly brackets", "c. quotes", "d. semicolons"],
        answer: "a"
    },

    {
        question: "To section out parts of code to make them not run use: ",
        choices: ["a. //", "b. ()", "c. {}", "d. []"],
        answer: "a"
    }
]










//Functions Section//

//when i click the start button a timer starts
startBtn.addEventListener("click", startQuiz );

function countdown () {
    var count = 60, timer = setInterval(function() {
        counterDiv.innerHTML=count--;
          if(count == 1) clearInterval(timer);
      }, 1000);
}
//press the button to start the quiz

 //calling of initial function (when i click the start button start countown)
//make visible questions and answers
function startQuiz () {
    countdown();
    questionDiv.style.display="initial"
    questionDiv.removeAttribute("class", "Hide")
    introPage.setAttribute("class", "Hide")
    showQuestions();
}

function showQuestions () {
    questionMain.innerHTML=questionList[0].question
   var choiceArray=questionList[0].choices
    for (var i=0; i<choiceArray.length; i++) {
    // create or access button (create dynamically)
    var answerbutton = document.createElement('button')
    //innerHTML set button to equal choice array at index [i]
    answerbutton.innerText = ulQuestions[i]
    answerbutton.classList.add('btn')
    answerbutton.addEventListener("click")
      // ulQuestions.append(answerbutton)
    answerbuttonsEl.appendChild(answerbutton)
    }
};

  



//check if answer is correct

//when an answer button is clicked go to the next slide


//make the showResults function





//Hide Code Quiz Challenge

//Load in questions and answers from q and a array

//Make a series of id click events for each of the buttons in HTML in questions section

//After click compare correct answer with the chosen answer (on click look up how to take the value of a button on google)

//Take value and compare to correct answer in questions array

//After it compares.. take next item in array (once 0 loads use the 0 index)

//when all questions are answered goto the results page
function endQuiz () {
    countdown();
    resultsDiv.style.display="initial"
    resultsDiv.removeAttribute("class", "Hide")
    questionDiv.setAttribute("class", "Hide")
    showResults(); //define this
    }

function showResults () {
    highscoreMain.innerHTML=questionList[0].question
    for (var i=0; i<choiceArray.length; i++) {

    }
}
//add event listners



