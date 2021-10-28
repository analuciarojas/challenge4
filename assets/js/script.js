const questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with ____.",
        answer: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correctAnswer: "3. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answer: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answer: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is ____.",
        answer: ["1. JavaScript", "2. terminal / bash ", "3. for loops", "4. console.log"],
        correctAnswer: "4. console.log"
    }
];
/*

const rightWrong = document.querySelector("#answer-message");
let scoreList = document.querySelector(".scorelist");
let scoreArray = [];
const answB = document.querySelectorAll("button.answer-b")
let submitScrBtn = document.querySelector("#submit-score");
let clearScrBtn = document.querySelector("#clearScores");
let viewScrBtn = document.querySelector("#view-scores");
let goBackBtn = document.querySelector("#goBack");
var Intro = document.querySelector("#intro");
*/
const Intro = document.querySelector(".intro");
var start = document.querySelector("#start");
const highscores = document.querySelector("#highscores");
const finalScore = document.querySelector("#final-score");
let questionCount = 0;
var secondsLeft=76;
var time = document.querySelector("#time");
let questionSection = document.querySelector("#questions");
var score = document.querySelector("#score");
var answ1 = document.querySelector("#answer1");
var answ2 = document.querySelector("#answer2");
var answ3 = document.querySelector("#answer3");
var answ4 = document.querySelector("#answer4");
var questionS=document.querySelector("#question");





function hidingSections() {
    Intro.style.display = "none";
    finalScore.style.display = "none";
    highscores.style.display = "none";
    questionSection.style.display = "block";
    questionCount = 0;
    setTime();
    setQuestion(questionCount);
};

function setQuestion(id) {
    while(id<4)
    {
        if (id < questions.length) {
            questionS.textContent = questions[id].question;
            answ1.textContent = questions[id].answer[0];
            answ2.textContent = questions[id].answer[1];
            answ3.textContent = questions[id].answer[2];
            answ4.textContent = questions[id].answer[3];
        }
    };
    
}

function setTime() {
    let timerShown= setInterval(function () {
        secondsLeft--;
        time.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerShown);
            questionSection.style.display = "none";
            finalScore.style.display = "block";
            score.textContent = secondsLeft;
        }
    }, 1000);
}

start.addEventListener("click", hidingSections);



/*


function checkAnswer(event) {
    event.preventDefault();

    rightWrong.style.display = "block";
    let p = document.createElement("p");
    rightWrong.appendChild(p);

    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } 
   
    else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }

    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}

function addScore(event) {
    event.preventDefault();

    finalScore.style.display = "none";
    highscores.style.display = "block";

    let init = initialsInput.value.toUpperCase();
    scoreArray.push({ initials: init, score: secondsLeft });

    scoreArray = scoreArray.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    
      scoreList.innerHTML="";
    for (let i = 0; i < scoreArray.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreArray[i].initials}: ${scoreArray[i].score}`;
        scoreList.append(li);
    }

    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
}

function displayScores() {
    let storedScoreList = JSON.parse(localStorage.getItem("scoreArray"));

    if (storedScoreList !== null) {
        scoreArray = storedScoreList;
    }
}

function clearScores() {
    localStorage.clear();
    scoreList.innerHTML="";
} 

*/


/*answB.forEach(item => {
    item.addEventListener('click', checkAnswer);
});

submitScrBtn.addEventListener("click", addScore);

goBackBtn.addEventListener("click", function () {
    highscores.style.display = "none";
    Intro.style.display = "block";
    secondsLeft = 75;
    time.textContent = `Time:${secondsLeft}s`;
});

clearScrBtn.addEventListener("click", clearScores);

viewScrBtn.addEventListener("click", function () {
    if (highscores.style.display === "none") {
        highscores.style.display = "block";
    } 
    else if (highscores.style.display === "block") {
        highscores.style.display = "none";
    } 
    
    else {
        return alert("Hey. Take Quiz. There is No High Score.");
    }
});
*/

