const start = document.getElementById('start');
start.addEventListener('click', startgame)

function startgame(event) {
    console.log('Hello, World');
    document.getElementsByTagName('game-zone');
    let swapImg = getElementTagName('img');
    swapImg.src = "scroll.png";
}