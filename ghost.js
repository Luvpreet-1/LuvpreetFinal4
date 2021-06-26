class Monster{
    constructor(x,y,width,height) {
              this.x = x;
              this.y = y;
              this.width = width;
              this.height = height;
              this.sprite = createSprite(this.x,this.y,this.width,this.height);
              this.sprite.addImage(ghostImage);
              this.sprite.scale = 0.1;
    }
    display (){
        this.sprite.shapeColor = "yellow";
        monsterGroup.add(this.sprite);
       this.sprite.velocityX = -10;
        this.sprite.velocityY = 9;
    }
}