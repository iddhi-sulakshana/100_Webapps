const attributes = ['https://www.pngfind.com/pngs/m/651-6511001_pile-of-rocks-png-rock-clipart-transparent-png.png','https://www.pikpng.com/pngl/m/25-254221_sheet-of-paper-png-sheet-of-paper-drawing.png','data:image/png;base64,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'];
const attributesWord = ['ROCK', 'PAPER','SCISSOR'];
var player1 = player2 = true;

function Start(btn){
    player1 = player2 = true;
    btn.innerHTML = "Stop";
    btn.style.backgroundColor = 'red';
    document.body.setAttribute('onkeydown', 'ValidateKey(event)');
    btn.setAttribute('onClick', 'Stop(this)');
    document.querySelector('h1.Win').innerHTML = " ";
    Update();
}
function Stop(btn){
    player1 = player2 = false;
    btn.innerHTML = "Start";
    btn.style.backgroundColor = 'greenyellow';
    document.body.removeAttribute('onkeydown', 'ValidateKey(event)');
    btn.setAttribute('onClick', 'Start(this);');
    CheckWin();
}
function CheckWin(){
    let player1val = document.querySelector('h2.player1').innerHTML;
    let player2val = document.querySelector('h2.player2').innerHTML;
    let display = document.querySelector('h1.Win');
    if(player1val === player2val) {
        display.innerHTML = "DRAW";
        return;
    }
    if((player1val === 'SCISSOR' && player2val === 'PAPER')||(player1val === 'PAPER' && player2val === 'ROCK')||(player1val === 'ROCK' && player2val === 'SCISSOR')) {
        display.innerHTML = "PLAYER 1 WIN";
        return;
    }
    display.innerHTML = "PLAYER 2 WIN";
}
function Update(){
    if(!(player1 || player2)){
        Stop(document.querySelector('.start'));
        return;
    }
    if(player1){
        let num = Math.floor(Math.random() * (2-0+1)+0);
        document.querySelector('img.player1').src = attributes[num];
        document.querySelector('h2.player1').innerHTML = attributesWord[num];
    }
    if(player2){
        let num = Math.floor(Math.random() * (2-0+1)+0);
        document.querySelector('img.player2').src = attributes[num];
        document.querySelector('h2.player2').innerHTML = attributesWord[num];
    }
    window.requestAnimationFrame(Update);
}
function ValidateKey(e){
    if(e.code === 'ShiftLeft'){
        player1 = false;
        return;
    }
    if(e.code === 'ShiftRight'){
        player2 = false
        return;
    }
}
const container = document.getElementById('container');
for (let i = 0; i < 300; i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    container.appendChild(block)
}
function animateBlocks(){
    anime({
        targets: '.block',
        translateX: () =>{
            return anime.random(-700,700);
        },
        translateY: () =>{
            return anime.random(-500,500);
        },
        scale: () =>{
            return anime.random(1,5);
        },
        background: '#A4FF4F',
        duration: 2000,
        easing: 'easeInOutQuad',
        delay: anime.stagger(100),
        complete: animateBlocks
    },0);
}
animateBlocks();