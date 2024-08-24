const start = document.getElementById('start');

start.addEventListener('click', shuffle);
start.addEventListener('click', startgame);
start.addEventListener('click', newQuestion);

//---------------------   Set the Game Zone   ------------------------------------------------//
function startgame(event) {
    console.log('Hello, World');
    
    let gameZone = document.getElementById('game-zone');
    gameZone.innerHTML = `   
                        <section id="play-area">
                            <div id="quest-num">
                                <p>Question Number: </p><p id="questNum">1</p>
                            </div>

                            <div id="question-area">
                                <p>Question:</p>
                                <p id="newQuestion"></p>
                            </div>
                            
                            <div id="answer-options">
                                <button id="a" class="button" onclick="checkAnswer(this.id)"><p>A - </p></button>
                                <button id="b" class="button" onclick="checkAnswer(this.id)"><p>B - </p></button>
                                <button id="c" class="button" onclick="checkAnswer(this.id)"><p>C - </p></button>
                                <p> id="result"</p>
                            </div>
                            
                            <div id="score-zone">
                                <p>Score:</p>
                                <p id="score">0</p>
                            </div>
                        </section>            
                        `;
                        console.log('game-zone built');
}

//-----------------------------  Show Question Number and after the 10th Question, end gamend game afgter 10 questions  ----------------------//
function questNum() {
    let questNum = parseInt(document.getElementById("questNum"));
            if (questNum === '11')  {
                endGame();
        } else {
            document.getElementById("questNum") = ++questNum;
            console.log(questNum);
        }
    }


//-------------------------------------------------  Generate Questions  --------------------------------------------------//
//------------------------------------------  Use Fisher-Yates algorith to shuffle the questionSheet array  ------------------------------------//
function shuffle() {
    var j, x, i;
    for (i = questionSheet.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = questionSheet[i];
        questionSheet[i] = questionSheet[j];
        questionSheet[j] = x;
    }
    console.log(questionSheet[0]);
    return questionSheet;
}

//---------------------------------  Display the new question from the array entrythat corresponds to the question number  ----------------------------//
function newQuestion() {
    let questNum = document.getElementById('questNum').innerText;  // Read the number of the question
    let newQuestion = questionSheet[questNum - 1];  // selet the question number that corresponds to the array
    document.getElementById('newQuestion').innerText = newQuestion.question;  // display question
    document.getElementById('a').innerText = newQuestion.answers.a;  // display corresponding answer to buttons
    document.getElementById('b').innerText = newQuestion.answers.b;
    document.getElementById('c').innerText = newQuestion.answers.c;
    console.log(newQuestion);
    }
  

//------------------------------------------------  Check answer and loop  --------------------------------------------//
function checkAnswer(clicked) { 
    let questNum = document.getElementById('questNum').innerText;  // Read the number of the question again
    console.log(questNum);
    let userAnswer = e => {   // Get ID of Clicked Element
      }
    console.log(userAnswer);
    let correctAnswer = questionSheet[questNum - 1].correctAnswer; // select the question number that corresponds to the array and acquire the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById('result').innerText = "Yup!"
            increaseScore(), questNum(), newQuestion()
        } else {
            document.getElementById('result').innerText = "Nope"
            questNum(), newQuestion()
        }
    console.log(userAnswer); console.log(questNum); console.log(correctAnswer);
}

//-----------------------------------------------  Increase Score on Correct Answer  -----------------------------------//
function increaseScore() {
    let score = parseInt(document.getElementById("score").value);
    document.getElementById("score").innerText = ++score;
    console.log("score");
}

//------------------------------------------------ End the game and continue?  ----------------------------------------------//
function endGame() {

}

//------------------------------------------------  Questions Array  ----------------------------------------------//
let questionSheet = [
    {
        question: "What is the first letter of the Alphabet?",
        answers: {
            a: "A - A",
            b: "B - B",
            c: "C - C"
        },
        correctAnswer: "a"
    },
    {
        question: "Who fired first?",
        answers: {
            a: "A - Han Solo",
            b: "B - The Lone Gunman",
            c: "C - There was a gunshot?"
        },
        correctAnswer: "a"
    },
    {
        question: "How many primary attributes are there in Dungeons and Drangons?",
        answers: {
            a: "A - 5",
            b: "B - 6",
            c: "C - 8"
        },
        correctAnswer: "b"
    },
    {
        question: "How many sides on a dodecahedron?",
        answers: {
            a: "A - 6",
            b: "B - 10",
            c: "C - 12"
        },
        correctAnswer: "c"
    },
    {
        question: "A man walks in to a bar...",
        answers: {
            a: "A - Ouch!",
            b: "B - ...and has a drink. The End.",
            c: "C - This isn't the correct answer."
        },
        correctAnswer: "b"
    },
    {
        question: "What is mycology?",
        answers: {
            a: "A - the study of mice.",
            b: "B - the study of microscopes.",
            c: "C - the study on funghi."
        },
        correctAnswer: "a"
    },
    {
        question: "What do you call a man with a car on his head?",
        answers: {
            a: "A - Jack",
            b: "B - not going anywhere.",
            c: "C - awaiting serious medical attention."
        },
        correctAnswer: "a"
    },
    {
        question: "Why do I wait for my dad jokes to fully mature?",
        answers: {
            a: "A - The smell... dear Stars, it's for the smell!!!",
            b: "B - Because then they're fully GROAN...",
            c: "C - Just... nope..."
        },
        correctAnswer: "b"
    },
];