const canvas = document.getElementById('game')
canvas.width = 1024
canvas.height = 576
const content = canvas.getContext('2d')

function createRect(color, position, size){
    content.fillStyle = color;
    content.fillRect(position.x, position.y, size.width, size.height)
}

const gravity = 0.8
const movementSpeed = 7
const jumpSpeed = 20
let timer
let over

function keyDown(){
    switch (event.code){
        //player1
        case 'KeyA':
            keys.a.pressed = true
            keys.P1lastKey = 'A'
            break;
        case 'KeyD':
            keys.d.pressed = true
            keys.P1lastKey = 'D'
            break;
        case 'KeyW':
            if(Player1.velocity.y == 0) Player1.velocity.y = -jumpSpeed
            break;
        case 'Space':
            Player1.Attack();
            Player1.changeSprite(Player1.sprites.attack)
            break;

        //player2
        case 'ArrowLeft':
            keys.left.pressed = true
            keys.P2lastkey = 'Left'
            break;
        case 'ArrowRight':
            keys.right.pressed = true
            keys.P2lastkey = 'Right'
            break;
        case 'ArrowUp':
            if(Player2.velocity.y == 0) Player2.velocity.y = -jumpSpeed
            break;
        case 'Enter':
            Player2.Attack();
            Player2.changeSprite(Player2.sprites.attack)
            break;
    }
}
function keyUp(){
    switch (event.code){
        case 'KeyA':
            keys.a.pressed = false
            break;
        case 'KeyD':
            keys.d.pressed = false
            break;

            
        case 'ArrowLeft':
            keys.left.pressed = false
            break;
        case 'ArrowRight':
            keys.right.pressed = false
            break;
    }
}

function detectCollision({rect1, rect2}){
    if(rect2.position.x < rect1.position.x + rect1.size.width
    && rect2.position.x + rect2.size.width > rect1.position.x
    && rect2.position.y + rect2.size.height > rect1.position.y
    && rect2.position.y < rect1.position.y + rect1.size.height){
        return true
    }
    return false
}


let timerId
//timer
function countDown(){
    if(timer >= 0 && ! over){
        timer--;
        document.querySelector('.timer').children[0].innerHTML = timer
        timerId = setTimeout(countDown, 1000);
    }            
}
