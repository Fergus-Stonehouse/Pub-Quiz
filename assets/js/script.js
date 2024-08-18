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
                                <button id="a" class="button"><p>A</p></button>
                                <button id="b" class="button"><p>B - What's it to you, you betentacled thing!</p></button>
                                <button id="c" class="button"><p>C - It's never Lupus.</p></button>
                            </div>
                            
                            <div id="score-zone">
                                <p>Score:</p>
                                <p id="score">0</p>
                            </div>
                        </section>            
                        `;
}

function questNum(event) {
    let questNum = parseInt(document.getElementById("questNum").innerText);
    document.getElementById("questNum").innerText = ++questNum;
}

function newQuestion(event) {
    //-------------------------------------------   randomly generate a new question   ---------------------------------------//
    let questionSheet = []
    for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * 10)
        while (questionSheet.includes(index)){
            index = Math.floor(Math.random() * 10)
        }
    questionSheet.push(i)
}
// and now to populate the list with actual questions

for (let i = 0; i < questionSheet.length; i++) {
    chosen_questions[i] = your_questions_list[chosen_questions[i]];
}

console.log(chosen_questions);
}



function checkAnswer(event) {
    document.getElementById("answer-options").addEventListener('click', function(e){
        let userAnswer = e.target.id;
        console.log(userAnswer);
        return userAnswer;
      });
    console.log(userAnswer); console.log(userAnswer).textContent;
    let correctAnswer = questionSheet[correctAnswer].textContent;
    if (userAnswer === correctAnswer) {
        increaseScore(); questNum(); newQuestion ();
        console.log(correctAnswer);
    } else {
        questNum(); newQuestion ();
        console.log('wrong', questionSheet[correctAnswer])
    }
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