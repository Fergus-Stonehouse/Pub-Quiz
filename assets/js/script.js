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
                                
                        <div id="score-zone">
                            <p id="score">Score</p>
                        </div>
                        `;
    }