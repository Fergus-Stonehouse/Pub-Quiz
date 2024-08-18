const start = document.getElementById('start');
start.addEventListener('click', startgame)

//---------------------   Set the Game Zone   ------------------------------------------------//
function startgame(event) {
    console.log('Hello, World');
    let gameZone = document.getElementById('game-zone');
    gameZone.innerHTML= `   
                        <section id="play-area">
                            <div id="quest-num">
                                <p>Question Number: </p id="questNum"><p>1</p>
                            </div>

                            <div id="question-area">
                                <p>Question:</p>
                                <p>What is the first letter of the Alphabet?</p>
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
                        console.log(questNum);
                        console.log(score);
    }

function questNum() {
    let questNum = parseInt(document.getElementById("questNum").innerText);
    document.getElementById("questNum").innerText = ++questNum;
}