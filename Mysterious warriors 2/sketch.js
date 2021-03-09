// variables for images
var archerImg,knightImg;

var rocketImg,battlebg,battlebgSprite,mainbg,playImg,option,optionImg,bg2;

var iceGolemImg,golemImg,howToPlayImg;

var diamondimg,goodimg,goldimg,homeimg,gameOverimg;

//variables for animations
var iceGolemAnimation,golemAnimation,rockAnimation;
var robotAnimation,archerAnimation;
var knightAnimation;

//variables for character
var start,choose,character;
var gameState = 0;
var ch1,ch2,ch3,ch4;

//variables for group

var RobotGroup,RocketGroup,GoldGroup,DiamondGroup,StoneGroup;
var over,homeButton,howPlay;

var kill = 0;
var goldCount = 0;
var diamondCount = 0;

//variable for sounds
var coinsound,gameoversound;

function preload(){

    //loading sounds
    coinsound = loadSound("sounds/coin sound.mp3");
    gameoversound = loadSound("sounds/game over sound.mp3");

    //loading images
    archerImg = loadImage("images/archers/main.png");
    knightImg = loadImage("images/knights/main.png");
    golemImg = loadImage("images/golems/main.png");
    iceGolemImg = loadImage("images/golems/main2.png");
    rocketImg = loadImage("images/robots/hand1.png");
    battlebg = loadImage("images/battlebg.jpg");
    mainbg = loadImage("images/bg.png");
    playImg = loadImage("images/play.png");
    optionImg = loadImage("images/options.png")
    bg2 = loadImage("images/bg2.jpg");
    diamondimg = loadImage("images/diamond.png");
    goodimg = loadImage("images/feedback good.png");
    goldimg = loadImage("images/gold.png");
    homeimg = loadImage("images/home.png");
    gameOverimg = loadImage("images/game over.png");
    howToPlayImg = loadImage("Images/how.png")

    ///loading animations
    iceGolemAnimation = loadAnimation("images/golems/ice golem/1.png","images/golems/ice golem/2.png",
    "images/golems/ice golem/3.png","images/golems/ice golem/4.png","images/golems/ice golem/5.png",
    "images/golems/ice golem/6.png","images/golems/ice golem/7.png","images/golems/ice golem/8.png",
    "images/golems/ice golem/9.png");

    golemAnimation = loadAnimation("images/golems/walk/1.png","images/golems/walk/2.png",
    "images/golems/walk/3.png","images/golems/walk/4.png","images/golems/walk/5.png",
    "images/golems/walk/6.png","images/golems/walk/7.png","images/golems/walk/8.png",
    "images/golems/walk/9.png","images/golems/walk/10.png","images/golems/walk/11.png");

    rockAnimation = loadAnimation("images/golems/attack/1.png","images/golems/attack/2.png",
    "images/golems/attack/3.png","images/golems/attack/4.png","images/golems/attack/5.png",
    "images/golems/attack/6.png","images/golems/attack/7.png");

    robotAnimation  = loadAnimation("images/robots/1.png","images/robots/2.png",
    "images/robots/3.png","images/robots/4.png","images/robots/5.png",
    "images/robots/6.png","images/robots/7.png","images/robots/8.png","images/robots/9.png",
    "images/robots/10.png","images/robots/11.png");

    archerAnimation = loadAnimation("images/archers/1.png","images/archers/2.png",
    "images/archers/3.png","images/archers/4.png","images/archers/5.png",
    "images/archers/6.png","images/archers/7.png","images/archers/8.png","images/archers/9.png",
    "images/archers/10.png","images/archers/11.png","images/archers/12.png","images/archers/13.png",
    "images/archers/14.png");

    knightAnimation = loadAnimation("images/knights/1.png","images/knights/2.png","images/knights/3.png",
    "images/knights/4.png","images/knights/5.png","images/knights/6.png","images/knights/7.png",
    "images/knights/8.png","images/knights/9.png","images/knights/10.png","images/knights/11.png",
    "images/knights/12.png","images/knights/13.png","images/knights/14.png");

}

function setup(){
    createCanvas(1350,620);

    battlebgSprite = createSprite(0,0,1350,620);
    battlebgSprite.addImage(battlebg);
    battlebgSprite.scale = 4.2;
    battlebgSprite.visible = false;
    battlebgSprite.x = battlebgSprite.width/2;

    ch1 = createSprite(600,200,30,30);
    ch1.addImage(archerImg);
    ch1.visible = false;
    ch1.scale = 0.5;

    ch2 = createSprite(200,500,30,30);
    ch2.addImage(knightImg);
    ch2.visible = false;
    ch2.scale = 0.5;

    ch3 = createSprite(600,500,30,30);
    ch3.addImage(golemImg);
    ch3.visible = false;
    ch3.scale = 0.5;

    ch4 = createSprite(1000,480,30,30);
    ch4.addImage(iceGolemImg);
    ch4.visible = false;
    ch4.scale = 0.9;


    start = createSprite(620,250,100,50);
    start.addImage(playImg);

    character = createSprite(100,320,2,2);
    character.visible = false;
    character.setCollider("circle",0,0,30);

    option = createSprite(620,380,20,20);
    option.addImage(optionImg);
    option.scale = 0.5;

    RobotGroup = createGroup();
    GoldGroup = createGroup();
    RocketGroup = createGroup();
    DiamondGroup = createGroup();
    StoneGroup = createGroup();

    over = createSprite(650,200,20,20);
    over.addImage(gameOverimg);
    over.visible = false;

    homeButton = createSprite(1320,30,20,20);
    homeButton.addImage(homeimg);
    homeButton.visible = false;
    homeButton.scale = 0.2

    howPlay = createSprite(990,150,20,20);
    howPlay.addImage(howToPlayImg);
    howToPlayImg.scale = 0.5;

}

function draw(){

    if(gameState === 0){
        background(mainbg);
        if(mousePressedOver(start)){
            gameState = 1;
        }
        if(mousePressedOver(option)){
            gameState = 2;
        }
        if(mousePressedOver(howPlay)){
            gameState = 5;
        }
    }



    if(gameState === 1){
        clear();
        edges=createEdgeSprites();
    character.bounceOff(edges[0]);
    character.bounceOff(edges[2]);
    character.bounceOff(edges[3]);
    character.bounceOff(edges[1]);
        battlebgSprite.visible = true;
        homeButton.visible = true;
        character.velocityY = character.velocityY+0.2;
        if(keyWentDown("space")){
            spawnRock();
        }
        if(keyWentDown(UP_ARROW)){
            character.velocityY = -4;
        }
        if(character.y > 321){
            character.y = 320
        }
        battlebgSprite.velocityX = -3;
        if(battlebgSprite.x < 150){
            battlebgSprite.x = battlebgSprite.width/2;
        }
        start.visible = false;
        character.visible = true;
        option.visible = false;
        background(0,0,0);
        if(keyWentDown(RIGHT_ARROW)){
            character.addAnimation('walking',archerAnimation);
            character.velocityX = 4;
            }
            character.scale = 2;
            if(keyWentDown(LEFT_ARROW)){
                character.addAnimation('running',rotArcherAnimation);
                character.velocityX = -4;
                }
        ch1.visible = false;
        ch2.visible = false;
        ch3.visible = false;
        ch4.visible = false;
        spawnObstacles();
        spawnObstacles2();
        spawnDiamond()
        spawnGold();
        if(RobotGroup.isTouching(character) || RocketGroup.isTouching(character)){
            gameoversound.play();
            gameState = 3;
        }
        if(GoldGroup.isTouching(character)){
            coinsound.play();
            goldCount = goldCount+1;
            GoldGroup.destroyEach();
        }
        if(DiamondGroup.isTouching(character)){
            coinsound.play();
            diamondCount = diamondCount+1;
            DiamondGroup.destroyEach()
        }
        if(StoneGroup.isTouching(RobotGroup) || StoneGroup.isTouching(RocketGroup)){
            kill = kill+1;
            StoneGroup.destroyEach();
            RobotGroup.destroyEach();
            RocketGroup.destroyEach();
        }
        if(mousePressedOver(homeButton)){
            gameState = 4;
        }
    }



    if(gameState === 2){
        clear()
        homeButton.visible = true;
        start.visible = false;
        character.visible = true;
        option.visible = false;
        ch1.visible = true;
        ch2.visible = true;
        ch3.visible = true;
        ch4.visible = true;
        background(bg2);
        if(mousePressedOver(ch1)){
            character.addAnimation('walking',archerAnimation);
            gameState=1;
        }
         if(mousePressedOver(ch2)){
            character.addAnimation('knight',knightAnimation);
            gameState=1;
        }
         if(mousePressedOver(ch3)){
            character.addAnimation('golem',golemAnimation);
            gameState=1;
        }
         if(mousePressedOver(ch4)){
            character.addAnimation('ice_golem',iceGolemAnimation);
            gameState=1;
        }
        if(mousePressedOver(homeButton)){
            gameState = 4;
        }
    }



    if(gameState === 3){
        character.visible = false;
        homeButton.visible = true;
        RocketGroup.destroyEach();
        RobotGroup.destroyEach();
        GoldGroup.destroyEach();
        DiamondGroup.destroyEach();
        StoneGroup.destroyEach();
        over.visible = true;

        if(mousePressedOver(homeButton)){
            clear()
            gameState = 4;
        }

    }



    if(gameState === 4){

    }


    if(gameState === 5){
        clear();
        background(0)
        start.visible = false;
        option.visible = false;
        howPlay.visible = false;
        textSize(21);
        fill("white")
        textFont("Georgia");
        textStyle(BOLD);
        text("WELCOME TO MYSTERIOUS WARRIORS",500,100);
        text("THE GAME RULES ARE SO SIMPLE USE RIGHT,LEFT AND UP ARROW KEY TO MOVE YOUR MYSTERIOUS WARRIOR",10,150)
        text("USE SPACE BAR TO THROW YOUR WEAPON AND BE ALERT ENEMIES CAN SPAWN FROM ANYWHERE",80,250)
        text("YOU CAN SELECT YOUR WARRIOR AND FIGHT WITH IT, THEIR ARE DIFFERENT ENEMIES TO FIGHT SO, GO AND FIGHT",1,350)
        text("SO BEST OF LUCK",600,420)

    }

    drawSprites();
    textSize(20);
    fill("black")
    textFont("Georgia");
    textStyle(BOLD);
    text("KILLS: "+kill,40,30);
    text("DIAMOND: "+diamondCount,150,30);
    text("GOLD: "+goldCount,340,30);
}

function spawnObstacles(){

    if(frameCount % 300==0){
        robot = createSprite(1350,320,20,20);
        robot.addAnimation('robot_walking',robotAnimation);
        robot.velocityX = -3;
        robot.scale = 2;
        robot.lifetime = 450;
        robot.setCollider("rectangle",0,0,45,40);
        RobotGroup.add(robot);
    }
}

function spawnObstacles2(){
    if(frameCount % 200==0){
        hand = createSprite(random(50,1300),0,20,20);
        hand.addImage(rocketImg);
        hand.velocityY = 3;
        hand.scale = 2;
        hand.lifetime = 450;
        hand.setCollider("rectangle",0,0,20,20)
        RocketGroup.add(hand);
    }
}

function spawnRock(){
    rock = createSprite(50,random(220,380),20,20);
    rock.addAnimation('stone',rockAnimation);
    rock.velocityX = 3;
    rock.scale = 1.3;
    rock.lifetime = 450;
    StoneGroup.add(rock);
}

function spawnDiamond(){
    if(frameCount % 800==0){
        diamond = createSprite(0,random(80,300),20,20);
        diamond.addImage(diamondimg)
        diamond.velocityX = 5;
        diamond.scale = 0.1;
        diamond.lifetime = 270;
        DiamondGroup.add(diamond)
    }
}

function spawnGold(){
    if(frameCount % 257==0){
        gold = createSprite(0,random(20,300),20,20);
        gold.addImage(goldimg);
        gold.scale = 0.5;
        gold.velocityX = 4;
        gold.lifetime = 338;
        GoldGroup.add(gold);
    }
}