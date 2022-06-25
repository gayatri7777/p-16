var PLAY;
var END;
var gamestate;
var b,scene;
var sceneImage,bImage;
var obstical1,obstical2,obstical3,obstical4,obstical5,obstical6;
var arrow_1Image,arrow_2Image,arrow_3Image,arrow_4Image,arrow_5Image,arrow6_Image;

function prelod ();
bImage = loadImage(rabbit.png);
sceneImage = loadImage(backgroundImage0.png);

function setup ();
createCanvas(400,400);
scene = createSprite(0,0,400,400);
scene.addImage(sceneImage);
b = createSprite(350,200,20,50);
b.addImage(bImage);

function draw (){
background(0);
if (gamestate === PLAY){
scene.velocityX=-4;
if (scene.x<0){
    scene.x=width/2;
}
b.y=world.mouseY;
var select_obstical = Math.round(random(1,6));
if (world.frameCount%60==0){
    switch(select_obstical){
    case 1:obstical1();
    break;
    case 2:obstical2();
    break;
    case 3:obstical3();
    break;
    case 4:obstical4();
    break;
    case 5:obstical5();
    break;
    case 6:obstical6();
    break;
    default:break;
    }
}
}

drawSprites();
if (gamestate === END){
    b.destroy;
    scene.velocityX=0;
    if (frameCount>60){
        gamestate=end;
    }
}
}

function obstical1();
obstical1 = createSprite(0,math.round(random(20,370)) ,10,10);
obstical1 = addImage(arrow_1Image);
obstical1.velocityX = 3;
obstical1.lifetime = 160;
obstical1.scale = 0.1;

 
function obstical2();
obstical2 = createSprite(0,math.round(random(20,370)) ,10,10);
obstical2 = addImage(arrow_2Image);
obstical2.velocityX = 3;
obstical2.lifetime = 160;
obstical2.scale = 0.1;

function obstical3();
obstical3 = createSprite(0,math.round(random(20,370)) ,10,10);
obstical3 = addImage(arrow_3Image);
obstical3.velocityX = 3;
obstical3.lifetime = 160;
obstical3.scale = 0.1;

function obstical4();
obstical4 = createSprite(0,math.round(random(20,370)) ,10,10);
obstical4 = addImage(arrow_4Image);
obstical4.velocityX = 3;
obstical4.lifetime = 160;
obstical4.scale = 0.1;

function obstical5();
obstical5 = createSprite(0,math.round(random(20,370)) ,10,10);
obstical5 = addImage(arrow_5Image);
obstical5.velocityX = 3;
obstical5.lifetime = 160;
obstical5.scale = 0.1;

function obstical6();
obstical6 = createSprite(0,math.round(random(20,370)) ,10,10);
obstical6 = addImage(arrow_2Image);
obstical6.velocityX = 3;
obstical6.lifetime = 160;
obstical6.scale = 0.1;