const start = document.getElementById('start');
start.addEventListener('click', startgame)

//---------------------   Set the Game Zone   ------------------------------------------------//
function startgame(event) {
    console.log('Hello, World');
    let gameZone = document.getElementById('game-zone');
    gameZone.innerHTML= `  
                        <img src="assets/images/scroll.png" class="game-scroll" alt="A scroll">   
                        <div id="play-area">    
                            <div id="question-area">
                                <p>Question</p>
                            </div>
                            <div id="answer-options">
                                <button id="AnswerA" class="button"><p>A</p></button>
                                <button id="AnswerB" class="button"><p>B</p></button>
                                <button id="AnswerC" class="button"><p>C</p></button>
                            </div>
                            <div id="score-zone">
                                <p>Score:</p>
                                <p>score boiler plate</p>
                            </div>
                        </div>            
                        `;
    }
