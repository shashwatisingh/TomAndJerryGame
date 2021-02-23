 var tom,tomImages;       
var jerry,jerryImages  
var background,backgroundImage;

function preload() {
    //load the images here
backgroundImage= loadImage("garden.png");
tomImage = loadImage("tom1.png","tom2.png","tom3.png","tom4.png");
jerryImage = loadImage("jerry1.png","jerry2.png","jerry3.png","jerry4.png");

}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
tom = createSprite(870,600);
tom.addAnimation("tomSleeping",tomImg1);
tom.scale = 0.2;

jerry = createSprite(200,600);
jerry.addAnimation("jerryStanding",jerryImg1);
jerry.scale = 0.15;


}

function draw() {

    background("garden.png");
    //Write condition here to evalute if cat and mouse collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
    //write code here to change animation
        cat.addAnimation("catLastImage", catImg3);
        cat.changeAnimation("catLastImage");

    }



    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");

    }
    if(keyCode === RIGHT_ARROW){
        cat.velocityX = 5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");

    }

}
