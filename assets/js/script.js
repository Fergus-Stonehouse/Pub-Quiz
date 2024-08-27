const gameZone = document.getElementById('game-zone');
const landingZone = document.getElementById('landing-zone');
const start = document.getElementById('start');
const buttonA = document.getElementById('a');
const buttonB = document.getElementById('b');
const buttonC = document.getElementById('c');
const scoreText = document.getElementById("score");
const questNumText = document.getElementById("questNum");
let score;
let currentQuestion;

start.addEventListener('click', startgame);

//---------------------   Set the Game Zone   ------------------------------------------------//
function startgame() {
    landingZone.classList.add('hidden');
    gameZone.classList.remove('hidden');
    currentQuestion = 0;
    score = 0;
    buttonA.addEventListener('click', checkAnswer);
    buttonB.addEventListener('click', checkAnswer);
    buttonC.addEventListener('click', checkAnswer);
    shuffle();
    newQuestion();
    console.log('game-zone built');
}

//-----------------------------  Show Question Number and after the 10th Question, end game after 10 questions  ----------------------//
function questNumber() {
    if (currentQuestion +1 == 11) {
        endGame();
    } else {
        questNumText.innerHTML = currentQuestion+1;
    }
}

//-------------------------------------------------  Generate Questions  --------------------------------------------------//
//------------------------------------------  Use Fisher-Yates algorith to shuffle the questionSheet array  ------------------------------------//
function shuffle() {
    let j, x, i;
    for (i = questionSheet.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = questionSheet[i];
        questionSheet[i] = questionSheet[j];
        questionSheet[j] = x;
    }
    return questionSheet;
}

//---------------------------------  Display the new question from the array entry that corresponds to the question number  ----------------------------//
function newQuestion() {
    document.getElementById('newQuestion').innerText = questionSheet[currentQuestion].question; // display question
    document.getElementById('a').innerText = questionSheet[currentQuestion].answers.a; // display corresponding answer to buttons
    document.getElementById('b').innerText = questionSheet[currentQuestion].answers.b;
    document.getElementById('c').innerText = questionSheet[currentQuestion].answers.c;
}

//------------------------------------------------  Check answer and loop  --------------------------------------------//
function checkAnswer(event) {
    let answerOptions = questionSheet[currentQuestion]; // select the question number that corresponds to the array for answer
    let correctAnswer = answerOptions.correctAnswer; // get the answer
    console.log(answerOptions.correctAnswer);
    buttonText = event.target.innerHTML;
    
    if (buttonText == correctAnswer) {
        increaseScore();   
    }
    currentQuestion++;
    questNumber();
    newQuestion();
}
        

//-----------------------------------------------  Increase Score on Correct Answer  -----------------------------------//
function increaseScore() {
    score++;
    scoreText.innerHTML = score;
    console.log(score);
}

//------------------------------------------------ End the game and continue?  ----------------------------------------------//
function endGame() {
    gameZone.classList.add(hidden);
    endGame.classList.remove(hidden);
    finalScore.innerHTML = score;
    console.log('end game was called');
}