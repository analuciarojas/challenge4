const questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        question: "The condition in an if / else statement is enclosed with ____.",
        answer: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correctAnswer: "2"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answer: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answer: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is ____.",
        answer: ["1. JavaScript", "2. terminal / bash ", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];

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
let viewScrBtn = document.querySelector("#view-scores");
const answB = document.querySelectorAll("button.answer-b")
const rightWrong = document.querySelector("#answer-message");
var Line = document.querySelector("#hr");
let submitScrBtn = document.querySelector("#submit-score");
let scoreArray = [];
let scoreList = document.querySelector(".scorelist");
let clearScrBtn = document.querySelector("#clearScores");
let goBackBtn = document.querySelector("#goBack");
let initialsInput = document.querySelector("#initials");

finalScore.style.display = "none";
highscores.style.display = "none";
questionSection.style.display = "none";


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
    viewScrBtn.style.display = "none";

    if (id < questions.length) {
        questionS.textContent = questions[id].question;
        answ1.textContent = questions[id].answer[0];
        answ2.textContent = questions[id].answer[1];
        answ3.textContent = questions[id].answer[2];
        answ4.textContent = questions[id].answer[3];
    }

}

function setTime() {
    let timerShown= setInterval(function () {
        secondsLeft--;
        time.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerShown);
            questionSection.style.display = "none";
            finalScore.style.display = "block";
            viewScrBtn.style.display = "block";
            hr.style.display="none";
            score.textContent = secondsLeft;
        }
    }, 1000);
}

function checkAnswer(event) {
    event.preventDefault();

    let p = document.createElement("p");
    var hr = document.createElement("HR");

    setTimeout(function () {
        hr.style.display = 'none';
        p.style.display = 'none';
    }, 1000);

 
    if (questions[questionCount].correctAnswer === (event.target.value)) {
        Line.appendChild(hr);
        rightWrong.appendChild(p);
        p.textContent = "Correct!";
    }  else if (questions[questionCount].correctAnswer !== (event.target.value)) {
        secondsLeft = secondsLeft - 10;
        Line.appendChild(hr);
        rightWrong.appendChild(p);
        p.textContent = "Wrong!";
    }

    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}

function addScore(event) {
    event.preventDefault();

    time.style.display = "none";
    viewScrBtn.style.display = "none";
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
        li.textContent = `${scoreArray[i].initials} - ${scoreArray[i].score}`;
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
    scoreArray.length = 0
    alert(scoreArray.length);
    scoreList.innerHTML="";
} 

goBackBtn.addEventListener("click", function () {
    highscores.style.display = "none";
    Intro.style.display = "block";
    time.style.display = "block";
    viewScrBtn.style.display = "block";
    secondsLeft = 75;
    time.textContent = `Time:${secondsLeft}s`;
});


viewScrBtn.addEventListener("click", function () {
        highscores.style.display = "block";
        Intro.style.display = "none";
        viewScrBtn.style.display = "none";
    
});

start.addEventListener("click", hidingSections);

answB.forEach(item => {
    item.addEventListener('click', checkAnswer);
});

submitScrBtn.addEventListener("click", addScore);

clearScrBtn.addEventListener("click", clearScores);



