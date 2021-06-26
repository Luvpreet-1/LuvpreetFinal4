class Ghost{
    constructor(x,y,width,height) {
              this.x = x;
              this.y = y;
              this.width = width;
              this.height = height;
              this.sprite = createSprite(this.x,this.y,this.width,this.height);
              this.sprite.addImage(monsterImage);
             this.sprite.scale = 0.2;
    }
    display (){
        this.sprite.shapeColor = "blue";
       // this.sprite.addImage(monsterImage);
        ghostGroup.add(this.sprite);
        this.sprite.velocityX = -5;
        //this.sprite.velocityY = 5;
    }
}