var ball
function setup() 
{
createCanvas(600,600);
ball=createSprite(300,300,50,50);
}

function draw() 
{
background(30);
drawSprites();
if (keyIsDown(RIGHT_ARROW))
{
ball.position.x=ball.position.x+9;
}
if (keyIsDown(LEFT_ARROW))
{
ball.position.x=ball.position.x-9;
}
if (keyIsDown(UP_ARROW))
{
ball.position.y=ball.position.y-9;
}
if (keyIsDown(DOWN_ARROW))
{
ball.position.y=ball.position.y+9;
}

}




