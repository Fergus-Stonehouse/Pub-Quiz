const start = document.getElementById('start');

start.addEventListener('click', startgame);
start.addEventListener('click', questNum);
start.addEventListener('click', newQuestion);

//---------------------   Set the Game Zone   ------------------------------------------------//
function startgame(event) {
    console.log('Hello, World');
    
    let gameZone = document.getElementById('game-zone');
    gameZone.innerHTML = `   
                        <section id="play-area">
                            <div id="quest-num">
                                <p>Question Number: </p><p id="questNum">0</p>
                            </div>

                            <div id="question-area">
                                <p>Question:</p>
                                <p id="newQuestion"></p>
                            </div>
                            
                            <div id="answer-options">
                                <button id="answerA" class="button"><p>A</p></button>
                                <button id="answerB" class="button"><p>B - What's it to you, you betentacled thing!</p></button>
                                <button id="answerC" class="button"><p>C - It's never Lupus.</p></button>
                            </div>
                            
                            <div id="score-zone">
                                <p>Score:</p>
                                <p id="score">0</p>
                            </div>
                        </section>            
                        `;

    console.log(questNum).value;
    console.log(score).value;
}

function questNum(event) {
    let questNum = parseInt(document.getElementById("questNum").innerText);
    document.getElementById("questNum").innerText = ++questNum;
}

function newQuestion(event) {
    //-------------------------------------------   randomly generate a new question   ---------------------------------------//
    let newQuestion = questionSheet[Math.floor(Math.random() * questionSheet.length)];
    console.log(newQuestion).value
}

function increaseScore() {
    let score = parseInt(document.getElementById("score").value);
    document.getElementById("score").innerText = ++score;
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
        question: "What is the first whole number?",
        answers: {
            a: "A - 0",
            b: "B - 1",
            c: "C - 2"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the first letter of the Alphabet?",
        answers: {
            a: "A - ",
            b: "B - ",
            c: "C - "
        },
        correctAnswer: "a"
    },
    {
        question: "What is the first letter of the Alphabet?",
        answers: {
            a: "A - ",
            b: "B - ",
            c: "C - "
        },
        correctAnswer: "a"
    },
    {
        question: "What is the first letter of the Alphabet?",
        answers: {
            a: "A - ",
            b: "B - ",
            c: "C - "
        },
        correctAnswer: "a"
    },
    {
        question: "What is the first letter of the Alphabet?",
        answers: {
            a: "A - ",
            b: "B - ",
            c: "C - "
        },
        correctAnswer: "a"
    },
    {
        question: "What is the first letter of the Alphabet?",
        answers: {
            a: "A - ",
            b: "B - ",
            c: "C - "
        },
        correctAnswer: "a"
    },
    {
        question: "What is the first letter of the Alphabet?",
        answers: {
            a: "A - ",
            b: "B - ",
            c: "C - "
        },
        correctAnswer: "a"
    },
];