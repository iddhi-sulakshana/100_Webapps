let started = false
function startGame(){
    if (typeof Player1 !== 'undefined') {
        delete Player1
    }
    if (typeof Player2 !== 'undefined') {
        delete Player2
    }
    if (typeof background !== 'undefined') {
        delete background
    }
    if (typeof shop !== 'undefined') {
        delete shop
    }
    if (typeof keys !== 'undefined') {
        delete keys
    }
    background = new Sprite({
        position:{
            x:0,
            y:0
        },
        imageSrc: './IMG/background.png'
    })
    shop = new Sprite({
        position:{
            x:610,
            y:95
        },
        imageSrc: './IMG/shop.png',
        scale: 3,
        frames: 6
    })  

    document.querySelector('.UI').style.display = 'none'
    timer = 90
    over = false

    //player1
    Player1 = new Fighter({
        position:{
            x:7,
            y:0
        },
        velocity:{
            x:0,
            y:0
        },
        imageSrc: './IMG/samuraiMack/Idle.png',
        frames: 8,
        scale:2.5,
        offset:{
            x: 212,
            y: 165
        },
        sprites:{
            idle:{
                imageSrc: './IMG/samuraiMack/Idle.png',
                frames: 8
            },
            run:{
                imageSrc: './IMG/samuraiMack/Run.png',
                frames: 8,  
            },
            jump:{
                imageSrc: './IMG/samuraiMack/Jump.png',
                frames: 2,  
            },
            fall:{
                imageSrc: './IMG/samuraiMack/Fall.png',
                frames: 2,  
            },
            attack:{
                imageSrc: './IMG/samuraiMack/Attack1.png',
                frames: 6,  
            },
            takeHit:{
                imageSrc: './IMG/samuraiMack/Take Hit - white silhouette.png',
                frames: 4,  
            },
            death:{
                imageSrc: './IMG/samuraiMack/Death.png',
                frames: 6,  
            },
        },
        attackBoxOffset:{
            x:150,
            y:30
        }   
    })

    //player2
    Player2 = new Fighter({
        position:{
            x:canvas.width-7-70,
            y:0
        },
        velocity:{
            x:0,
            y:0
        },
        imageSrc: './IMG/kenji/Idle.png',
        frames: 4,
        scale: 2.5,
        offset:{
            x: 205,
            y: 180
        },
        sprites:{
            idle:{
                imageSrc: './IMG/kenji/Idle.png',
                frames: 4
            },
            run:{
                imageSrc: './IMG/kenji/Run.png',
                frames: 8,  
            },
            jump:{
                imageSrc: './IMG/kenji/Jump.png',
                frames: 2,  
            },
            fall:{
                imageSrc: './IMG/kenji/Fall.png',
                frames: 2,  
            },
            attack:{
                imageSrc: './IMG/kenji/Attack1.png',
                frames: 4,  
            },
            takeHit:{
                imageSrc: './IMG/kenji/Take Hit.png',
                frames: 3,  
            },
            death:{
                imageSrc: './IMG/kenji/Death.png',
                frames: 7,  
            },
        },
        attackBoxOffset:{
            x:-155,
            y:30
        }      
    })
    keys = {
        a:{
            pressed: false
        },
        d:{
            pressed: false
        },
        P1lastKey: '',
        left:{
            pressed: false
        },
        right:{
            pressed: false
        },
        P2lastkey: ''
    }
    countDown()
    if(!started){
        animate()
        started = true
    }
    window.addEventListener('keydown', keyDown)
    window.addEventListener('keyup', keyUp)
}

function animate(){
    window.requestAnimationFrame(animate)
    document.querySelector('.healthbar.player1').children[0].innerHTML = Player1.health
    document.querySelector('.healthbar.player2').children[0].innerHTML = Player2.health
    document.querySelector('.healthbar.player1').style.width = Player1.health + '%'
    document.querySelector('.healthbar.player2').style.width = Player2.health + '%'
    if(Player1.health === 0 || Player2.health === 0 || timer <= 0){
        gameOver()
    }
    createRect('black', {x:0,y:0}, {width:canvas.width,height:canvas.height})

    if(keys.a.pressed && keys.P1lastKey === 'A') {
        Player1.velocity.x = -movementSpeed
        Player1.changeSprite(Player1.sprites.run)
    }
    else if(keys.d.pressed && keys.P1lastKey === 'D') {
        Player1.velocity.x = movementSpeed 
        Player1.changeSprite(Player1.sprites.run)
    }
    else{
        Player1.velocity.x = 0 
        Player1.changeSprite(Player1.sprites.idle)
    }
    if(Player1.velocity.y < 0) Player1.changeSprite(Player1.sprites.jump)
    else if (Player1.velocity.y > 0) Player1.changeSprite(Player1.sprites.fall)

    if(detectCollision({
        rect1:{position:Player1.attackBox.position,size:Player1.attackBox.size},
        rect2:{position:Player2.position,size:Player2.size},
    }) && Player1.isAttacking && Player1.currentFrame == 4){
        Player1.isAttacking = false
        if(Player2.health - 10 <= 0){
            Player2.health = 0
            Player2.Died()
            return
        }
        Player2.takeHit()
    }
    if(detectCollision({
        rect1:{position:Player2.attackBox.position,size:Player2.attackBox.size},
        rect2:{position:Player1.position,size:Player1.size},
    }) && Player2.isAttacking && Player2.currentFrame == 2){
        Player2.isAttacking = false
        if(Player1.health - 10 <= 0){
            Player1.health = 0
            Player1.Died()
            return
        }
        Player1.takeHit()
    }
    if(Player1.isAttacking && Player1.currentFrame === 4) Player1.isAttacking = false;
    if(Player2.isAttacking && Player2.currentFrame === 2) Player2.isAttacking = false;

    if(keys.left.pressed && keys.P2lastkey === 'Left') {
        Player2.velocity.x = -movementSpeed
        Player2.changeSprite(Player2.sprites.run)
    }
    else if(keys.right.pressed && keys.P2lastkey === 'Right') {
        Player2.velocity.x = movementSpeed
        Player2.changeSprite(Player2.sprites.run)
    }
    else{
        Player2.velocity.x = 0 
        Player2.changeSprite(Player2.sprites.idle)
    }
    if(Player2.velocity.y < 0) Player2.changeSprite(Player2.sprites.jump)
    else if (Player2.velocity.y > 0) Player2.changeSprite(Player2.sprites.fall)

    background.Update()
    shop.Update()
    Player1.Update()
    Player2.Update()
}
function gameOver(){
    window.removeEventListener('keydown', keyDown)
    window.removeEventListener('keydown', keyUp)
    clearTimeout(timerId);
    over = true
    document.querySelector('.UI').children[1].innerHTML = "Replay"
    document.querySelector('.UI').style.display = 'flex'
    if(Player1.health === Player2.health){
        document.querySelector('.message').innerHTML = "Draw"
        return
    }
    if(Player1.health > Player2.health){
        document.querySelector('.message').innerHTML = "Player 1 Win"
        return
    }
    document.querySelector('.message').innerHTML = "Player 2 Win"
}
