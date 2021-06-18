const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine ,world
var Asteroid
var Bullet
var shipImage, backgroundImage, asteroidImage, bulletImage, explosionImage
var laserSound, explosionSound, crashSound, scoreSound
var gameState = "play"
var score = 0

function preload(){
  asteroidImage = loadImage("images/Asteroid.png");
  backgroundImage = loadImage("images/Background.jpg");
  bulletImage = loadImage("images/Bullet.png");
  shipImage = loadImage("images/Ship.png");
  explosionImage = loadImage("images/Exploud.png");
  crashSound = loadSound("Audio/crash.mp3");
  laserSound = loadSound("Audio/laser.mp3");
  scoreSound = loadSound("Audio/score.mp3");
  explosionSound = loadSound("Audio/explosion.mp3");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  //ship1 = new Ship(displayWidth/2-20, displayHeight-200)
  ship = createSprite(displayWidth/2-20,displayHeight-200);
  ship.addImage(shipImage);
  ship.scale = 0.1;
  BulletGroup = new Group();
  AsteroidGroup = new Group();
}

function draw() {
  background("black");
  image(backgroundImage,displayWidth/4-70,0); 
  
fill("white")
textSize(40)
text("score: "+score, 30, 50)

  if(gameState === "play"){
    spawnAsteroid();
    if(keyDown("space")){
      B = spawnBullets();
      BulletGroup.add(B);
      B.x = ship.x + 1;
     laserSound.play();
    }
    if(keyDown("d")){
      ship.x = ship.x + 3
    }
    if(keyDown("a")){
      ship.x = ship.x - 3
    }
    if(BulletGroup.isTouching(AsteroidGroup)){
      AsteroidGroup.destroyEach();
      score = score + 10;
      explosionSound.play();
    }

    if(AsteroidGroup.isTouching(ship)){
      ship.visible = false;
      gameState = "end";
      crashSound.play();
    }
  }
  else if(gameState === "end"){
    imageMode(CENTER)
    image(explosionImage, ship.x, ship.y, 200, 200);
    fill("blue")
    textSize(30)
    text("Game Over", displayWidth/2-80, displayHeight/2)
    AsteroidGroup.setVelocityYEach(0);
  }
  drawSprites();
  
}
function spawnAsteroid(){
if(frameCount%40===0){
  Asteroid = createSprite(20,-50,20,20)
  Asteroid.x = Math.round(random(displayWidth/4,displayWidth/2+200))
  Asteroid.velocityY = 12;
  Asteroid.addImage(asteroidImage);
  Asteroid.scale = 0.15
  AsteroidGroup.add(Asteroid);
}
}
//function keyPressed(){
  //if(keyCode === 65){
    //Matter.Body.applyForce(ship1.body,{x:ship1.body.position.x,y:ship1.body.position.y}, {x:1, y:0});
  //}
function spawnBullets(){
  Bullet = createSprite(20,displayHeight-230,5,5);
  Bullet.velocityY = -15;
  Bullet.addImage(bulletImage);
  Bullet.scale = 0.05
  Bullet.shapeColor = "red";
  Bullet.lifetime = 300;
  return Bullet;
}
