class Barbarian{
    constructor(x,y){
        this.body=createSprite(x,y);
        this.body.addAnimation("barbarian",bImg);
    }
}