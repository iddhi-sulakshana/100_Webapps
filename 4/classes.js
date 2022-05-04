// class sprite
class Sprite{
    constructor({position, imageSrc, scale = 1, frames = 1, currentFrame = 0, frameElapsed = 0, frameHold = 10, offset = {x:0,y:0}}){
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.frames = frames
        this.currentFrame = currentFrame
        this.frameElapsed = frameElapsed
        this.frameHold = frameHold
        this.offset = offset
    }
    Draw(){
        content.drawImage(
            this.image,
            this.currentFrame * (this.image.width / this.frames), 
            0, 
            this.image.width/this.frames,
            this.image.height,
            this.position.x - this.offset.x,
            this.position.y - this.offset.y,
            (this.image.width / this.frames) * this.scale,
            this.image.height * this.scale
        )
    }
    animateFrames(){
        this.frameElapsed++
        if(this.frameElapsed % this.frameHold === 0){
            this.currentFrame++
            if(this.currentFrame >= this.frames){
                this.currentFrame = 0
            }
        }
    }
    Update(){
        this.animateFrames()
        this.Draw()
    }
}
    // class fighter
    class Fighter extends Sprite{
    constructor({position, velocity, imageSrc, scale = 1, frames = 1,currentFrame=0, frameElapsed=0,frameHold=5,offset = {x:0,y:0}, sprites, attackBoxOffset}){
        super({
            position,
            imageSrc,
            scale,
            frames,
            currentFrame,
            frameElapsed,
            frameHold,
            offset
        })
        this.position = position
        this.size = {
                width:70,
                height:140
            }
        this.velocity = velocity
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            size:
            {
                width: 100,
                height: 60
            },
            offset: attackBoxOffset
        }
        this.isAttacking = false
        this.health = 100
        this.sprites = sprites
        this.dead = false
        for(const sprite in this.sprites){
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
    }
    Attack(){
        this.isAttacking = true
    }
    Update(){
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y
        if(!this.dead) this.animateFrames()
        this.Draw()
        this.velocity.y += gravity
        if(this.position.y+this.velocity.y >= 0 && this.position.y+this.velocity.y+this.size.height <= canvas.height-95) this.position.y += this.velocity.y
        else {
            this.velocity.y = 0
            this.position.y = 340.8
        }
        if(this.position.x+this.velocity.x >= 0 && this.position.x+this.velocity.x+this.size.width <= canvas.width) this.position.x += this.velocity.x
        else this.velocity.x = 0
    }
    changeSprite(sprite){
        if(this.image == this.sprites.death.image) {
            if(this.currentFrame === this.sprites.death.frames -1){
                this.dead = true
            }
            return
        }
        if(this.image == this.sprites.attack.image && this.currentFrame < this.sprites.attack.frames-1) return
        if(this.image == this.sprites.takeHit.image && this.currentFrame < this.sprites.takeHit.frames-1) return
        if(sprite.image == this.image) return
        this.currentFrame = 0
        
        this.image = sprite.image
        this.frames = sprite.frames
    }
    takeHit(){
        this.health -= 10
        this.changeSprite(this.sprites.takeHit)
    }
    Died(){
        this.changeSprite(this.sprites.death)
    }
}