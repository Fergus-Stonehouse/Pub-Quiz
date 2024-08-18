const start = document.getElementById('start');
start.addEventListener('click', startgame)

//---------------------   Set the Game Zone   ------------------------------------------------//
function startgame(event) {
    console.log('Hello, World');
    let gameZone = document.getElementById('game-zone');
    gameZone.innerHTML= `   
                        <section id="play-area">
                            <div id="quest-num">
                                <p>Question Number: $(questNum)</p>
                            </div>
                            <br>
                            <div id="question-area">
                                <p>Question:</p>
                                <p>What is the first letter of the Alphabet?</p>
                            </div>
                            <br>
                            <div id="answer-options">
                                <button id="AnswerA" class="button"><p>A</p></button>
                                <button id="AnswerB" class="button"><p>B</p></button>
                                <button id="AnswerC" class="button"><p>C</p></button>
                            </div>
                            <br>
                            <div id="score-zone">
                                <p>Score:</p>
                                <p>score boiler plate</p>
                            </div>
                        </section>            
                        `;
                        console.log(questNum);
    }

function questNum() {
    let questNum = getElementById("questNum")
}