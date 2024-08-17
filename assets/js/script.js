const start = document.getElementById('start');
start.addEventListener('click', startgame)

//---------------------   Set the Game Zone   ------------------------------------------------//
function startgame(event) {
    console.log('Hello, World');
    let gameZone = document.getElementById('game-zone');
    gameZone.innerHTML= `
                        <div id="question-area">
                            <img src="assets/images/scroll.png" alt="A scroll">
                        </div>
                        <div id="answer-options">
                            <button id="AnswerA"><p>A</p></button>
                            <button id="AnswerB"><p>B</p></button>
                            <button id="AnswerC"><p>C</p></button>
                        </div>
                        <div id="score-zone">
                            <h3>Score:</h3>
                            <p>score boiler plate</p>
                        </div>
                        `;
    }
