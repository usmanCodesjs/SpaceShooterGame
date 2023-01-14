var score = 0;
var explosion

function preload(){
bgimage = loadImage("maxresdefault.jpg")
spacecraftImage= loadImage("shooter.png")
bulletImage= loadImage("bullet.png")
enemy1 = loadImage("enemy1.png")
enemy2 = loadImage("enemy2.png")
explosionImage = loadImage("explosion.png")
borderLine = loadImage("line.png")
}





function setup(){
createCanvas(windowWidth,windowHeight)
spacecraft = createSprite(windowWidth/2,windowHeight/2,200,20)
spacecraft.addImage(spacecraftImage)
spacecraft.scale = 0.5


bullet = createSprite(spacecraft.x,spacecraft.y, 15, 15)
bullet.shapeColor = "red"
bullet.visible = false
bullet.addImage(bulletImage)
bullet.scale = 0.2

border = createSprite(770,windowHeight-70,windowWidth,10)
//border.addImage(borderLine)
border.shapeColor = "yellow"
enemy = new Group()


explosion = createSprite(200,200,50,50)
explosion.addImage(explosionImage)
explosion.scale = 0.5
explosion.visible = false
}


function draw(){
    background(bgimage)
    textSize(30)
    fill("grey")
    text("score: "+ score,50,50)
    if(keyIsDown(RIGHT_ARROW)&& spacecraft.x < width-50){
  spacecraft.x = spacecraft.x + 5

    }

if(enemy.isTouching(spacecraft)||enemy.isTouching(border))
{enemy.destroyEach()
spacecraft.destroy()
enemy.setVelocityYEach()}    
enemiesGroup()
explosion.visible = false
if (enemy.isTouching(bullet)){
score = score + 50
bullet.visible = false
enemy.destroyEach()
explosion.x = bullet.x
explosion.y = bullet.y
explosion.visible = true
}
if(keyIsDown(LEFT_ARROW)&& spacecraft.x > 50){
spacecraft.x = spacecraft.x - 5
      
}
          
if(keyIsDown(DOWN_ARROW)){
spacecraft.y = spacecraft.y + 5
  
}

if(keyIsDown(UP_ARROW)){
spacecraft.y = spacecraft.y - 5

}
    drawSprites()
    if(keyDown("space")){
bullet.x = spacecraft.x
bullet.y = spacecraft.y
bullet.visible = true
bullet.velocityY = -5
    }
}

function enemiesGroup(){
if(frameCount%150===0){
var enemies = createSprite(Math.round(random(10,windowWidth)),15,10,10)
enemies.velocityY = 3
enemies.scale = 0.3
enemies.shapeColor = "green"
enemy.add(enemies)
var rand = Math.round(random(1,2)) 
if(rand===1){
enemies.addImage(enemy1)

}
else{enemies.addImage(enemy2)}
}


}
